import { AccordionActions, AccordionDetails, AccordionSummary, Paper, Accordion, styled } from '@mui/material'
import React from 'react'

// accordian start
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CreateSimpleSwitcher } from "./ChartHome";
// accordian close

function History() {
      // ACCORDIAN START
  const [expanded, setExpanded] = React.useState("panel1");

  const handleAccord = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // ACCORDIAN CLOSE

//   ITEM START 
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
//   ITEM CLOSE 


  return (
    <>
    <Item
            sx={{ pl: 3, pt: 3, textAlign: "left" }}
            style={{ backgroundColor: "#12122c" }}
          >
            <span style={{ textAlign: "start", color: "white" }}>History:</span>

            <div style={{ float: "right", display: "inline" }}>
              <span style={{ textAlign: "right", color: "white" }}>search</span>
            </div>
            <hr></hr>

            {/* <div>
            <span style={{textAlign:"start", color:"white"}}>Swap USDC | DAI:</span>

        <div style={{float:"right", display:"inline"}}>

            <span style={{textAlign:"right", color:"white"}}>03/10/22 08:32</span>
        </div>
</div> */}

            {/* ACCORDIAN SART  */}

           

            <Accordion
              sx={{ pt: -4 }}
              expanded={expanded === "panel1"}
              onChange={handleAccord("panel1")}
              style={{ backgroundColor: "#12122c", color: "white" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <div style={{ float: "left" }}>
                  <span style={{ textAlign: "start", color: "white" }}>
                    Swap USDC | DAI:
                  </span>
                </div>
                <div style={{ float: "right", display: "inline" }}>
                  <span
                    style={{
                      textAlign: "right",
                      color: "white",
                      marginLeft: "362px",
                    }}
                  >
                    03/10/22 08:32
                  </span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <span style={{ textAlign: "start", color: "white" }}>
                    From:
                  </span>

                  <div style={{ float: "right", display: "inline" }}>
                    <span style={{ textAlign: "right", color: "white" }}>
                      1200 USDC
                    </span>
                  </div>
                </div>

                <div>
                  <span style={{ textAlign: "start", color: "white" }}>
                    To:
                  </span>

                  <div style={{ float: "right", display: "inline" }}>
                    <span style={{ textAlign: "right", color: "white" }}>
                      1220 DAI
                    </span>
                  </div>
                </div>

                <div>
                  <span style={{ textAlign: "start", color: "white" }}>
                    Price:
                  </span>

                  <div style={{ float: "right", display: "inline" }}>
                    <span style={{ textAlign: "right", color: "white" }}>
                      1 USDC = 1.001 DAI{" "}
                    </span>
                  </div>
                </div>

                <div>
                  <span style={{ textAlign: "start", color: "white" }}>
                    Transaction:
                  </span>

                  <div style={{ float: "right", display: "inline" }}>
                    <span style={{ textAlign: "right", color: "white" }}>
                      0*804785787
                    </span>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{ pt: -4 }}
              expanded={expanded === "panel2"}
              onChange={handleAccord("panel2")}
              style={{ backgroundColor: "#12122c", color: "white" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <div style={{ float: "left" }}>
                  <span style={{ textAlign: "start", color: "white" }}>
                    Swap USDC | DAI:
                  </span>
                </div>
                <div style={{ float: "right", display: "inline" }}>
                  <span
                    style={{
                      textAlign: "right",
                      color: "white",
                      marginLeft: "362px",
                    }}
                  >
                    03/10/22 08:32
                  </span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <span style={{ textAlign: "start", color: "white" }}>
                    From:
                  </span>

                  <div style={{ float: "right", display: "inline" }}>
                    <span style={{ textAlign: "right", color: "white" }}>
                      1200 USDC
                    </span>
                  </div>
                </div>

                <div>
                  <span style={{ textAlign: "start", color: "white" }}>
                    To:
                  </span>

                  <div style={{ float: "right", display: "inline" }}>
                    <span style={{ textAlign: "right", color: "white" }}>
                      1220 DAI
                    </span>
                  </div>
                </div>

                <div>
                  <span style={{ textAlign: "start", color: "white" }}>
                    Price:
                  </span>

                  <div style={{ float: "right", display: "inline" }}>
                    <span style={{ textAlign: "right", color: "white" }}>
                      1 USDC = 1.001 DAI{" "}
                    </span>
                  </div>
                </div>

                <div>
                  <span style={{ textAlign: "start", color: "white" }}>
                    Transaction:
                  </span>

                  <div style={{ float: "right", display: "inline" }}>
                    <span style={{ textAlign: "right", color: "white" }}>
                      0*804785787
                    </span>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{ pt: -4 }}
              expanded={expanded === "panel3"}
              onChange={handleAccord("panel3")}
              style={{ backgroundColor: "#12122c", color: "white" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <div style={{ float: "left" }}>
                  <span style={{ textAlign: "start", color: "white" }}>
                    Swap USDC | DAI:
                  </span>
                </div>
                <div style={{ float: "right", display: "inline" }}>
                  <span
                    style={{
                      textAlign: "right",
                      color: "white",
                      marginLeft: "362px",
                    }}
                  >
                    03/10/22 08:32
                  </span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <span style={{ textAlign: "start", color: "white" }}>
                    From:
                  </span>

                  <div style={{ float: "right", display: "inline" }}>
                    <span style={{ textAlign: "right", color: "white" }}>
                      1200 USDC
                    </span>
                  </div>
                </div>

                <div>
                  <span style={{ textAlign: "start", color: "white" }}>
                    To:
                  </span>

                  <div style={{ float: "right", display: "inline" }}>
                    <span style={{ textAlign: "right", color: "white" }}>
                      1220 DAI
                    </span>
                  </div>
                </div>

                <div>
                  <span style={{ textAlign: "start", color: "white" }}>
                    Price:
                  </span>

                  <div style={{ float: "right", display: "inline" }}>
                    <span style={{ textAlign: "right", color: "white" }}>
                      1 USDC = 1.001 DAI{" "}
                    </span>
                  </div>
                </div>

                <div>
                  <span style={{ textAlign: "start", color: "white" }}>
                    Transaction:
                  </span>

                  <div style={{ float: "right", display: "inline" }}>
                    <span style={{ textAlign: "right", color: "white" }}>
                      0*804785787
                    </span>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            

            {/* ACCORDIAN CLOSE  */}
          </Item>
    </>
  )
}

export default History