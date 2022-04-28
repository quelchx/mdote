import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#ddfff", "#000a02")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: any) => ({
      color: mode("#022107", "#e6ffea")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components });
export default theme;
