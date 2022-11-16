import { Button, Grid, Stack,Paper, styled } from '@mui/material'
import React, {useState} from 'react'

function SwapCmp() {
  const [darkFontColor, setDarkFontColor] = useState("#FFFFFF");


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
      }));

  return (
    <>
          <Grid item xs={12} sm={12} md={9} lg={8} >
          <Item
            elevation={1}
            style={{ backgroundColor: "transparent", color: darkFontColor }}
          >
            <Stack spacing={2} direction="row">
              <Button
                size="large"
                variant="contained"
                sx={{ width: 200, padding: 2, fontWeight: "bold" }}
                style={{
                  background:
                    "linear-gradient(to right bottom, #13a8ff, #0074f0)",
                }}
              >
                ADD LIQUIDTY 
              </Button>
              <Button
                size="large"
              
                variant="contained"
                sx={{
                  width: 200,
                  padding: 2,
                  fontWeight: "bold",
                  
                  backgroundColor:
                  "#12122c"
                }}
              >
                REMOVE LIQUIDTY
              </Button>

              <Button
                size="large"
              
                variant="contained"
                sx={{
                  width: 200,
                  padding: 2,
                  fontWeight: "bold",
                
                  backgroundColor:
                  "#12122c"
                }}
              >
                POOL FACTORY
              </Button>
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={12} md={3} lg={4}>
          {/* <Item>xs=4</Item> */}
        </Grid> 
    </>
  )
}

export default SwapCmp