import { api } from "@/store/api/api";
import { IComment, ICommentDto } from "@/types/comment.interface";
import { COMMENT } from "@/services/comment/comment.service";

export const commentApi = api.injectEndpoints({
  endpoints: builder => ({
    createComment:  builder.mutation<IComment, ICommentDto>({
      query: body => ({
        url: COMMENT,
        method: 'PATCH',
        body
      }),
      invalidatesTags: (result, error, { videoId }) => [{ type: 'Video', id: videoId }]
    })
  })
})