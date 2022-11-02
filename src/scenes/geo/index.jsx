import { Box } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";

const GeoGraphy = () => {  
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="GeoGraphy Chart" subtitle="Simple Pie Chart"/>
        </Box>
        <Box height="75vh">
            <GeographyChart />
        </Box>
    </Box>
  )
}

export default GeoGraphy;
