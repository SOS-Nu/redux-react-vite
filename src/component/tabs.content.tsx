import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import UsersTable from "./users.table";
import { useAppSelector } from "../redux/hooks";

function TabsContent() {
  const totalListUsers = useAppSelector((state) => state.user.listUser.length);
  return (
    <Container>
      <Tabs
        defaultActiveKey="user"
        id="uncontrolled-tab-example"
        className="mb-3 mt-3"
      >
        <Tab eventKey="user" title="Users">
          <UsersTable />
        </Tab>
        <Tab eventKey="blog" title="Blogs">
          Tab content for Profile
        </Tab>
      </Tabs>
    </Container>
  );
}

export default TabsContent;
