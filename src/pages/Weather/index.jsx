import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { useViewportSize } from "@mantine/hooks";
import { useMemo, useState, memo } from "react";
import { geoUrl } from "../../assets/br-topo.js";
import ReactTooltip from "react-tooltip";
import { useEffect } from "react";
import { Card, Title, Grid, Stack, useMantineTheme } from "@mantine/core";
import { StatesList } from "./BrazilStates";

function Weather() {
  const { height, width } = useViewportSize();
  const Projection_Config_Preset = {
    0: {
      config: {
        scale: 900,
        center: [-55, -8],
      },
      width: 600,
      height: 900,
    },
    600: {
      config: {
        scale: 700,
        center: [-50, -13],
      },
      width: 600,
      height: 600,
    },
    900: {
      config: {
        scale: 500,
        center: [-50, -13],
      },
      width: 600,
      height: 400,
    },
    1200: {
      config: {
        scale: 500,
        center: [-50, -13],
      },
      width: 600,
      height: 410,
    },
    1536: {
      config: {
        scale: 300,
        center: [-50, -13],
      },
      width: 500,
      height: 230,
    },
  };

  const theme = useMantineTheme();

  const [weatherData, setWeatherData] = useState([]);

  const [tooltipLabel, setTooltipLabel] = useState("");

  const strToUrl = (str) => str.split(" ").join("+");

  const projectionConfig = useMemo(() => {
    if (width >= 0 && width < 600) return Projection_Config_Preset[0];
    else if (width >= 600 && width < 900) return Projection_Config_Preset[600];
    else if (width >= 900 && width < 1200) return Projection_Config_Preset[900];
    else if (width >= 1200 && width < 1536)
      return Projection_Config_Preset[1200];
    else return Projection_Config_Preset[1536];
  }, [height, width]);

  useEffect(() => {
    const abortController = new AbortController();

    if (weatherData.length > 0) return;
    StatesList.forEach((val) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${strToUrl(
          val
        )},Brazil&appid=${import.meta.env.VITE_OPEN_WEATHER_API}`,
        { signal: abortController.signal }
      )
        .then((res) => res.json())
        .then((data) => setWeatherData((curr) => [...curr, data]));
    });

    return () => abortController.abort();
  }, []);

  const icon = (icon) => {
    console.log(icon);
    return `http://openweathermap.org/img/w/${icon}.png`;
  };

  const tooltipStr = (name) => {
    const state = weatherData.filter((s) => s.name === name)[0];
    return (
      <Card shadow={"sm"} p="sm" radius={"md"} withBorder>
        <Card.Section p="sm">
          <Grid>
            <Grid.Col span={6}>
              <Title size="lg">{(state.main.temp - 273.15).toFixed(2)} C</Title>
            </Grid.Col>
            <Grid.Col span={6}>
              <Title size="xs">Weather Status</Title>
              {console.log(state.weather[0])}
              <img
                src={icon(state.weather[0].icon)}
                alt={state.weather[0].description}
              />
            </Grid.Col>
          </Grid>
        </Card.Section>
        <Card.Section p={"sm"}>
          <Stack>
            <Title size="sm">Wind Speed {state.wind.speed}</Title>
            <Title size="sm">
              Feels Like {(state.main.feels_like - 273.15).toFixed(2)} C
            </Title>
            <Title size="sm">Humidity {state.main.humidity}</Title>
          </Stack>
        </Card.Section>
      </Card>
    );
  };

  //   https://api.openweathermap.org/data/2.5/weather?lat=-9.070003236&lon=-68.66997929&appid=4a9d887513765b6632c0ababcf79a43d

  return (
    <>
      <div data-tip="">
        <ComposableMap
          projectionConfig={projectionConfig.config}
          width={projectionConfig.width}
          height={projectionConfig.height}
        >
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    fill="#fff"
                    stroke="#000"
                    style={{
                      hover: {
                        fill: "#000",
                        stroke: "#fff",
                      },
                    }}
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() =>
                      setTooltipLabel(tooltipStr(geo.properties.name))
                    }
                    onMouseLeave={() => {
                      setTooltipLabel("");
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
      <ReactTooltip
        backgroundColor={theme.colorScheme === "dark" ? "rgba(0, 0, 0, 0.5)" : "white"}
      >
        {tooltipLabel}
      </ReactTooltip>
    </>
  );
}

export default memo(Weather);
