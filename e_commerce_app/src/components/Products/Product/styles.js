import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: "100%",
    height: "100%",
    borderRadius: "15px",
    backgroundColor: "rgba(0,0,0,0.8)",
    border: '1px solid white'
  },
  media: {
    height: "0",
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
    color: "#fff",
  },
  articleName: {
    color: "#daa520",
    fontWeight: '700',
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    color: "#fff",
  },
  typoDescription: {
    backgroundColor: "rgba(200,200,200,0.8)",
    color: "#222",
    padding: "5px",   
    borderRadius: "10px",
    fontSize: "1rem",
    textAlign: "center",
  },
  cartIcon: {
    color: "#daa520",
  },
}));
