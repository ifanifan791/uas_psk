import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Datatable from "../../components/datatable/Datatable";

const Mylist = ({columns}) => {
  return (
    <div className="mylist">
      <Sidebar />
      <div className="mylistContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="product"/>
          <Widget type="category"/>
        </div>

        <div className="datatable">
          <Datatable columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Mylist;