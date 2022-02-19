import RowData from "./RowData";

function Section2Left() {
  let tableData = [
    {
      image: "/static/images/avatar/1.png",
      name: "company 1",
      created: "Thu, 26 Oct",
      reporter: "sleman",
      due: "Thu, 26 Oct",
      stats: "In Progress"
    },
    {
      image: "/static/images/avatar/1.png",
      name: "company 2",
      created: "Thu, 26 Oct",
      reporter: "sleman",
      due: "Thu, 26 Oct",
      stats: "Open"
    },
    {
      image: "/static/images/avatar/1.png",
      name: "company 3",
      created: "Thu, 26 Oct",
      reporter: "sleman",
      due: "Thu, 26 Oct",
      stats: "In Progress"
    },
    {
      image: "/static/images/avatar/1.png",
      name: "company 4",
      created: "Thu, 26 Oct",
      reporter: "sleman",
      due: "Thu, 26 Oct",
      stats: "Open"
    },
    {
      image: "/static/images/avatar/1.png",
      name: "company 3",
      created: "Thu, 26 Oct",
      reporter: "sleman",
      due: "Thu, 26 Oct",
      stats: "In Progress"
    },
    {
      image: "/static/images/avatar/1.png",
      name: "company 4",
      created: "Thu, 26 Oct",
      reporter: "sleman",
      due: "Thu, 26 Oct",
      stats: "Open"
    }
  ];

  let tableColTitle = [
    "Recent Projects",
    "Created",
    "Reported",
    "Due",
    "Stats"
  ];

  return (
    <div className="">
      <div className="flex-start">
        {tableColTitle.map((title, index) => (
          <div
            className="table-title"
            style={index > 0 ? { marginLeft: "130px" } : {}}
          >
            {title}
          </div>
        ))}
      </div>
      <div className="table-section">
        {tableData.map((rowData) => (
          <RowData data={rowData} />
        ))}
      </div>
    </div>
  );
}

export default Section2Left;
