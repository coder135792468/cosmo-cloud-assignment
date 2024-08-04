import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const generateQueryStr = (baseString: string, query: Object): string => {
  const queryString: string =
    baseString +
    Object.entries(query)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

  return queryString;
};

export const templateApi = createApi({
  reducerPath: "template-api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://free-ap-south-1.cosmocloud.io/development/`,
  }),

  endpoints: (builder) => ({
    getAllTemplates: builder.query<any, Object>({
      query: (queryParams) => {
        const queryStr = generateQueryStr("api/users?", queryParams);
        return { 
          url: queryStr,
          headers:{
            projectId:'66ac77c349cca49a0822f2ad',
            environmentId:'66ac77c349cca49a0822f2ae'
           } 
        };
      },
    }),


    getCurrTemplate: builder.query<any, Object>({
      // <Type of data the call will return, Type of parameter being passed to the query function>
      query: (id) => {
        return {
           url: "api/users/" + id,
           headers:{
            projectId:'66ac77c349cca49a0822f2ad',
            environmentId:'66ac77c349cca49a0822f2ae'
           } 
         };
      },
    }),

    addTemplate: builder.mutation({
      query: (body) => ({
        url: "api/users",
        method: "POST",
        body,
        headers:{
          projectId:'66ac77c349cca49a0822f2ad',
          environmentId:'66ac77c349cca49a0822f2ae'
         } 
      }),
    }),
    deleteTemplate: builder.mutation({
      query: (id) => ({
        url: "api/users/" + id,
        method: "DELETE",
        body:{},
        headers:{
          projectId:'66ac77c349cca49a0822f2ad',
          environmentId:'66ac77c349cca49a0822f2ae'
         } 
      }),
    }),
  }),
});

export const {
  useGetAllTemplatesQuery,
  useGetCurrTemplateQuery,
  useAddTemplateMutation,
  useDeleteTemplateMutation,
} = templateApi;