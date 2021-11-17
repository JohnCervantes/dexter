import { gql } from "@apollo/client";
import { state } from "../cache";
import { client } from "../pages/_app";

export const ADD_IMAGE = gql`
  mutation addImage(
    $date: String!
    $URL: String!
    $likes: String
    $dislikes: String
  ) {
    addImage(
      date: $date
      URL: $URL
      likes: $likes
      dislikes: $dislikes
    ) {
      _id
      date
      URL
      likes
      dislikes
    }
  }
`;

export const UPDATE_IMAGE = gql`
  mutation updateImage($_id: ID!, $URL: String!) {
    updateImage(_id: $_id, URL: $URL)
  }
`;

export const ADD_LIKE = gql`
  mutation addLike($_id: ID!, $likes: String!) {
    addLike(_id: $_id, likes: $likes) {
      _id
      likes
    }
  }
`;


export const ADD_DISLIKE = gql`
  mutation addDislike($_id: ID!, $dislikes: String!) {
    addDislike(_id: $_id, dislikes: $dislikes) {
      _id
      dislikes
    }
  }
`;

export async function addLike(_id, likes) {
  try {
    const {
      data: { addLike },
    } = await client.mutate({
      mutation: ADD_LIKE,
      variables: {
        _id,
        likes,
      },
    });

    const updatedImages = [...state().images];
    let i = 0;
    for (const item of updatedImages) {
      if (item._id === addLike._id) {
        updatedImages[i] = { ...updatedImages[i], likes: addLike.likes };
        break;
      }
      i++;
    }

    setState({
      images: updatedImages,
      showToast: {
        show: true,
        status: "success",
        header: "Success",
        message: "New image has been successfully added!",
      },
    });
  } catch (e) {
    setState({
      showToast: {
        showToast: {
          show: true,
          status: "error",
          header: "Failed to add an image",
          message: e.message,
        },
      },
    });
  }
}

export async function addDislike(_id, dislikes) {
  try {
    const {
      data: { addDislike },
    } = await client.mutate({
      mutation: ADD_DISLIKE,
      variables: {
        _id,
        dislikes,
      },
    });

    const updatedImages = [...state().images];
    let i = 0;
    for (const item of updatedImages) {
      if (item._id === addDislike._id) {
        updatedImages[i] = {
          ...updatedImages[i],
          dislikes: addDislike.dislikes,
        };
        break;
      }
      i++;
    }

    setState({
      images: updatedImages,
      showToast: {
        show: true,
        status: "success",
        header: "Success",
        message: "New image has been successfully added!",
      },
    });
  } catch (e) {
    setState({
      showToast: {
        showToast: {
          show: true,
          status: "error",
          header: "Failed to add an image",
          message: e.message,
        },
      },
    });
  }
}

export async function addImage(URL) {
  try {
    const {
      data: { addImage },
    } = await client.mutate({
      mutation: ADD_IMAGE,
      variables: {
        date: Date.now().toString(),
        URL,
        likes: "[]",
        dislikes: "[]",
      },
    });

    setState({
      images: state().images.concat(addImage),
      showModal: { show: false, type: "" },
      showToast: {
        show: true,
        status: "success",
        header: "Success",
        message: "New image has been successfully added!",
      },
    });
  } catch (e) {
    setState({
      showToast: {
        showToast: {
          show: true,
          status: "error",
          header: "Failed to add an image",
          message: e.message,
        },
      },
    });
  }
}

export function setState(field) {
  state({ ...state(), ...field });
}
