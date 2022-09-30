import styled from "styled-components";
const  Container = styled("div")`
   width: 100vw;
   height: 4rem;
   background: linear-gradient(180deg, #E8E1D9 0%, #125C13 100%);
   display:flex;
   justify-content: center;
   align-item:  center:
`
const Title = styled("h1")`
  margin: 0;
  color: #125C13;

  font-family: 'Nosifer', cursive;
`

const Navbar = () => {
    return (
       <Container>
          <Title>
            Rasky Rebels
          </Title>
       
       </Container>
    )
}
export default Navbar;