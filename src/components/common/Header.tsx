import styled from "styled-components";
import img4 from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

type TypewriterType = {
  typeString: (text: string) => TypewriterType;
  deleteAll: () => TypewriterType;
  pauseFor: (ms: number) => TypewriterType;
  start: () => TypewriterType;
};

const Header = () => {
  const [currentColor, setCurrentColor] = useState<string>("#e7642e");

  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColorValue = generateRandomColor();
      setCurrentColor(randomColorValue);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Container>
        <Hold>
          <Logo>
            <Pic src={img4} />
          </Logo>
          <Text>
            <Main style={{ color: currentColor }}>
              AJEGUNLE HIGH SCHOOL HACKathon
            </Main>
            <Minor>The Search For The Greatest Mind</Minor>

            <NavLink
              to="/start"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button>Let's Do This</Button>
            </NavLink>
          </Text>
          <Title>
            Welcome {" "}
            <TypewriterText>
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter: TypewriterType) => {
                  typewriter
                    .typeString("Cardoso School")
                    .pauseFor(2000)
                    .deleteAll()
                    .start()

                    .typeString("Caro Favour High School")
                    .pauseFor(2000)
                    .deleteAll()
                    .start()

                    .typeString("El Lenora School")
                    .pauseFor(2000)
                    .deleteAll()
                    .start()


                    .typeString("Real Brain Point school")
                    .pauseFor(2000)
                    .deleteAll()
                    .start()

                

                    .typeString("Ucee School")
                    .pauseFor(2000)
                    .deleteAll()
                    .start()

                    .typeString("Hope Spring School")
                    .pauseFor(2000)
                    .deleteAll()
                    .start()

                    .typeString("Anikeola School")
                    .pauseFor(2000)
                    .deleteAll()
                    .start()

                    .typeString("Gleam Starts College")
                    .pauseFor(2000)
                    .deleteAll()
                    .start()

                    .typeString("High Stone College")
                    .pauseFor(2000)
                    .deleteAll()
                    .start()

                    .typeString("Prime Gold College")
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
              />
            </TypewriterText>
          </Title>
        </Hold>
      </Container>
    </div>
  );
};



export default Header;
const Title = styled.text`
  color: white;
  font-size: 55px;
  line-height: 45px;
  display: flex;
  margin-top: 30px;
`;

const TypewriterText = styled.div`
  margin-left: 20px;
  color: white;
  font-size: 55px;
`;

const Button = styled.div`
  height: 45px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4C8FDF;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-top: 70px;

  transition: all 380ms;

  &:hover {
    cursor: pointer;
    transform: translate(0, -3px);
    color: black;
    background-color: #e7642e;
  }

  @media screen and (max-width: 500px) {
    height: 40px;
    width: 140px;
    font-size: 17px;
    margin-top: 50px;
  }
`;

const Minor = styled.div`
  color: white;
  background-color: rgba(0, 0, 0, 0);
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-top: 2px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
    text-align: center;
    font-weight: 700;
  }

  @media screen and (max-width: 320px) {
    font-size: 14px;
    text-align: center;
    font-weight: 700;
    line-height: 25px;
  }
`;

const Main = styled.div`
  color: #e7642e;
  background-color: rgba(0, 0, 0, 0);
  font-size: 30px;
  line-height: 37.5px;
  font-weight: 700;
  text-transform: uppercase;

  @media screen and (max-width: 500px) {
    font-size: 16px;
    text-align: center;
    font-weight: 700;
  }

  @media screen and (max-width: 320px) {
    font-size: 15px;
    text-align: center;
    font-weight: 700;
    line-height: 25px;
  }
`;

const Text = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Pic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Logo = styled.div`
  /* background-color: yellow; */
  width: 800px;
  height: 180px;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 82px;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
    height: 75px;
  }
`;

const Hold = styled.div`
  width: 83%;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 500px) {
    width: 90%;
    height: 94%;
    padding: 10px;
  }
  @media screen and (max-width: 320px) {
    width: 95%;
    height: 94%;
    padding: 10px;
  }
`;

const Container = styled.div`
  background-color: #141414;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;