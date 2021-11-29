import { ApolloError } from "apollo-server-errors";
import dexterImage from "../models/image.js";
import dexterEpisode from "../models/episode";

const resolvers = {
  Query: {
    images: async (parent, args, context) => {
      try {
        const result = await dexterImage.find({});
        return result;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    image: async (parent, { _id }, context) => {
      try {
        const result = await dexterImage.findOne({ _id });
        return result;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    episodes: async (parent, args, context) => {
      try {
        const result = await dexterEpisode.find({});
        return result;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    rating: async (parent, { _id }, context) => {
      try {
        const result = await dexterEpisode.findOne({ _id });
        return result;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
  Mutation: {
    addImage: async (parent, { date, URL, likes, dislikes }, context) => {
      try {
        const result = await dexterImage.create({
          date,
          URL,
          likes,
          dislikes,
        });

        return result;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    addEpisode: async (
      parent,
      { title, src, director, teleplay, writter, rating, synopsis },
      context
    ) => {
      try {
        const result = await dexterEpisode.create({
          title,
          src,
          director,
          teleplay,
          writter,
          rating,
          synopsis,
        });
        return result;
      } catch (error) {
        throw new ApolloError(error);
      }
    },

    addLike: async (parent, { _id, likes }, context) => {
      try {
        const result = await dexterImage.findOneAndUpdate(
          { _id },
          {
            likes,
          },
          {
            new: true,
          }
        );
        return result;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    addDislike: async (parent, { _id, dislikes }, context) => {
      try {
        const result = await dexterImage.findOneAndUpdate(
          { _id },
          {
            dislikes,
          },
          {
            new: true,
          }
        );
        return result;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    addRating: async (parent, { _id, rating }, context) => {
      try {
        const result = await dexterEpisode.findOneAndUpdate(
          { _id },
          {
            rating,
          },
          {
            new: true,
          }
        );
        return result;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    updateImage: async (parent, { _id, URL }, context) => {
      try {
        await dexterImage.findOneAndUpdate(
          { _id },
          {
            URL,
          }
        );
        return true;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
};

export default resolvers;
