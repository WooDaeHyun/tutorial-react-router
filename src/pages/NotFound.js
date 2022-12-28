const NotFound = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "column",
        flexWrap: "nowrap",
      }}
    >
      <div
        style={{
          color: "red",
          fontSize: 64,
        }}
      >
        404: Cannot found page
      </div>
      <div
        style={{
          color: "black",
          fontSize: 34,
        }}
      >
        please input correct path;
      </div>
    </div>
  );
};
export default NotFound;
