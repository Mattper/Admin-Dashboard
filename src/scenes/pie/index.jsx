import { Box } from "@mui/material";
import { PieChart } from "../../components/PieChart";
import Header from "../../components/Header";

const Pie = () => {
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Pie Chart" subtitle="Simple Pie Chart"/>
        </Box>
        <Box height="75vh">
            <PieChart />
        </Box>
    </Box>
  )
}

export default Pie;
