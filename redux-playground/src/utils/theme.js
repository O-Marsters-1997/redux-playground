import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "header" },
          style: {
            backgroundColor: "purple",
          },
        },
      ],
    },
  },
});

export default theme;
