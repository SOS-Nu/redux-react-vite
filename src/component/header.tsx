import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Form } from "react-bootstrap";
import { useEffect } from "react";
import { changeMode } from "../redux/app/app.slide";

function Header() {
  const totalListUsers = useAppSelector((state) => state.user.listUser.length);

  const mode = useAppSelector((state) => state.app.mode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) body.setAttribute("data-bs-theme", mode);
  }, [mode]);

  return (
    <Navbar className="bg-body-tertiary" data-bs-theme={mode}>
      <Container>
        <Navbar.Brand href="#home">sos nu {totalListUsers}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form>
            <Form.Check // prettier-ignore
              type="switch"
              defaultChecked={mode === "dark" ? true : false}
              onChange={(e) =>
                dispatch(
                  changeMode(e.target.checked === true ? "dark" : "light")
                )
              }
              id="custom-switch"
              label={
                mode === "light" ? (
                  <Navbar.Text>light mode</Navbar.Text>
                ) : (
                  <Navbar.Text>dark mode</Navbar.Text>
                )
              }
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
