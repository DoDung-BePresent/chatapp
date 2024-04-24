import React from "react";
import {
  Avatar,
  Container,
  Row,
  Section,
  SpaceComponent,
  TextComponent,
} from "../../components";

const HomeScreen = () => {
  return (
    <Container>
      <Section>
        <Row>
          <Avatar photoUrl="https://static.printler.com/cache/5/7/0/b/1/1/570b115da3e90ff66fd59ff1645b64716caeca1d.jpg" />
          <SpaceComponent width={12} />
          <TextComponent
            text="Hello world!!!"
            type="title"
            size={24}
            styles={{ textTransform: "uppercase" }}
            flex={1}
          />
        </Row>
      </Section>
    </Container>
  );
};

export default HomeScreen;
