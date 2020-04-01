import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Plus } from "../../Components/plus.svg";
import { Query } from "react-apollo";
import { GET_NOTES } from "../../queries";

const Header = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  margin-left: 10px;
  transform: scale(0.8);
  background-color: #eee;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  border: 0px;
  cursor: pointer;
`;

const Subtitle = styled.h2`
  color: #a2a19e;
  font-weight: 400;
`;

const Note = styled.div`
  padding: 10px;
  padding-left: 5px;
  transition: background-color 0.1s linear;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;
  &:hover {
    background-color: #eeeeee;
  }
`;

const NoteTitle = styled.span`
  padding-bottom: 5px;
  font-weight: 600;
  font-size: 20px;
`;

export default class Notes extends React.Component {
  render() {
    return (
      <>
        <Header>
          <Title>
            Chae Notes
            <Link to={"/add"}>
              <Button>
                <Plus />
              </Button>
            </Link>
          </Title>
          <Subtitle>Taking notes while we learn.</Subtitle>
        </Header>
        <Note>
          <Query query={GET_NOTES}>
            {({ data }) =>
              data.notes
                ? data.notes.map(note => (
                    <Link to={`/note/${note.id}`} key={note.id}>
                      <NoteTitle>{note.title}</NoteTitle>
                    </Link>
                  ))
                : null
            }
          </Query>
        </Note>
      </>
    );
  }
}
