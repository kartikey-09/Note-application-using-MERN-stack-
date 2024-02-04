import NavbarMenu from "../components/Homepage/Navbar/Navbar";
import note from "../assets/note.png";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <box>
      <NavbarMenu />
      <br></br>
      <Link to='/register'><Button>Sign up</Button></Link>
      <br></br>
      <br></br>
      <Link to='/login'><Button>Log in</Button></Link>
      
      <br></br>
      <br></br>
      <Link to='/notes'><Button>All Notes</Button></Link>
      
      


      <br></br>
      <br></br>
      <br></br>

     
      <img position={"absolute"} right={0} width={300} src={note} />
    </box>
  );
}
