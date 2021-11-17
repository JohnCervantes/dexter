import { ApolloError } from "apollo-server-errors";
import dexterImage from "../models/image.js";

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
