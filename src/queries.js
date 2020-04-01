import gql from "graphql-tag";
import { NOTE_FRAGMENT } from "./fragments";

export const GET_NOTES = gql`
  {
    notes @client {
      id
      title
      content
    }
  }
`;

// ${NOTE_FRAGMENT}Query: {
//   note: (_, variables, { cache }) => {
//     const id = cache.config.dataIdFromObject({
//       __typename: "Note",
//       id: variables.id
//     });
//     const note = cache.readFragment({ fragment: NOTE_FRAGMENT, id });
//     return note;
//   }
// }
// `;

// export const GET_NOTE = gql`
//   query getNote($id: Int!) {
//     note(id: $id) @client {
//       ...NoteParts
//     }
//   }
//   ${NOTE_FRAGMENT}
// `;
