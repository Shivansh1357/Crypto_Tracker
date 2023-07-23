import * as React from 'react';
import Tab from "@mui/material/Tab";
import { TabContext,TabList,TabPanel } from '@mui/lab';
import { ThemeProvider, createTheme } from '@mui/material';
import "./style.css"
import Grid from '../Grid';
import List from "../List"
import Button from '../../Common/Button';
export default function TabsComponent({coins,isWatchlistPage,setSearch}) {
  const [tabValue, setTabValue] = React.useState('grid');

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const style={
    color: "var(--white)",
    width:"50vw",
    fontSize:"1.2rem",
    fontWeight:"600",
    fontFamily: "Inter",
    textTransform:"capitalize",
  };
  const theme=createTheme({
    palette:{
     primary:{
      main:"#3a80e9"
     },
    },
  });
  return (
    <div>
    <ThemeProvider theme={theme}>
      <TabContext value={tabValue}>
        <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style}/>
          </TabList>
        <TabPanel value="grid">
                {
                coins.length == 0 ? (
                <div>
                  <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                    No Items Found
                  </h1>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      text={"Clear Search"}
                      onClick={(e) => {
                        setSearch("");
                      }}
                    />
                  </div>
                </div>
              ) : (
          <div className='grid-flex'>
            {
              coins.map((coin,i)=>{
                return <Grid coin={coin} key={i}   delay={((i + 5) % 5) * 0.1}
                isWatchlistPage={isWatchlistPage}/>
           
              })
            }
          </div>
              
              )
          }
        </TabPanel>
        <TabPanel value="list">
        <table className='list-table'>
        {coins.length == 0 ? (
                <div>
                  <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                    No Items Found
                  </h1>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      text={"Clear Search"}
                      onClick={(e) => {
                        setSearch("");
                      }}
                    />
                  </div>
                </div>
              ) : (
            
              coins?.map((coin,i)=>(  
                   <List coin={coin} key={i}      delay={(i % 10) * 0.1}
                   isWatchlistPage={isWatchlistPage} />
              ))
      
              )
              }
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
    </div>
  );
}