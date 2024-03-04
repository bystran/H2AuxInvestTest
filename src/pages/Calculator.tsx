

import { Box, Button, Typography, useColorScheme } from "@mui/joy";

// import { useForm, SubmitHandler } from "react-hook-form"
import Diagram from '../assets/diagram_input.png';
import DiagramInverse from '../assets/diagram_inverse.png';
import { ArrowForward } from "@mui/icons-material";
import ROUTE_CONSTANTS from "../routing/routeConstants";

// type Inputs = {
//     example: string
//     exampleRequired: string
// }

const Calculator = () => {
    const { mode } = useColorScheme();
    return (
        <Box
            sx={{
                minHeight: '100vh',
            }}
        >
            <Box
                py={'50px'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <Typography level="h3" color="primary" fontSize="lg" fontWeight="lg">
                H2AuxInvest – Hydrogen Infrastructure Costing Tool
            
                </Typography>
                <Typography level="h2">
                Let’s calculate the key parameters of your hydrogen infrastructure
                </Typography>
            </Box>
            <Box
                sx={(theme) => ({
                    marginTop: '50px',
                    borderWidth: 3,
                    borderRadius: 'sm',
                    bgcolor: 'background.surface',
                    maxWidth: '800px',
                    margin: 'auto',
                    boxShadow: theme.shadow.xl,
                    '--joy-shadowChannel': theme.vars.palette.primary.mainChannel,
                })}
            >
                <Box
                    py={'50px'}
                    sx={{
                        maxWidth: '400px',
                        margin: 'auto'
                    }}
                >
                    {mode === 'light' ? <img src={Diagram} width={'100%'} /> : <img src={DiagramInverse} width={'100%'} />}
                </Box>
            </Box>

            <Box
                py={'50px'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <Typography>
                The H2Auxinvest calculator asks you some questions on the hydrogen demand that you look to meet, 
                to allow calculations to size, specify and cost your hydrogen infrastructure.  
                More detail on these calculations are in the documentation.  Should any issues arise please contact the team by raising a new issue on the project github page. 
                </Typography>
                <Box
                    sx={{
                        maxWidth: "400px",
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 2,
                        my: 7,
                        '& > *': { flex: 'auto' },
                    }}
                >
                    <Button
                        component="a"
                        href={ROUTE_CONSTANTS.DOCS}
                        size="lg" variant="outlined" color="neutral">
                        Learn More
                    </Button>
                    <Button
                        component="a"
                        href={ROUTE_CONSTANTS.CALCULATOR_INTAKE}
                        size="lg"
                        endDecorator={<ArrowForward />}>
                        Start
                    </Button>
                </Box>
            </Box>

            {/* <form onSubmit={handleSubmit(onSubmit)}>

                <Input defaultValue="test" {...register("example")} />


                <Input {...register("exampleRequired", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}

                <Input type="submit" />
            </form> */}
            <Typography>
                All calculations and data provided by H2AuxInvest's Hydrogen Infrastructure Costing Tool are for informational purposes only. While this tool aims to provide helpful and accurate information, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information produced.
The information provided by the Hydrogen Infrastructure Costing Tool is not a substitute for professional advice. Engineering decisions should not be made solely on the basis of this tool. Always seek the guidance of qualified professionals before making any such decisions.
H2AuxInvest's Hydrogen Infrastructure Costing Tool is an open-source project developed for educational and informational purposes under principles of fair use. The tool is designed to support and further the understanding and roll-out of hydrogen infrastructure.
In no event shall H2AuxInvest or contributors to the Hydrogen Infrastructure Costing Tool be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence, or other torts, arising out of or in connection with the use of the tool or the contents of the tool. H2AuxInvest reserves the right to make additions, deletions, or modifications to the contents of the tool at any time without prior notice.
The Hydrogen Infrastructure Costing Tool is provided under a MIT License, which allows for redistribution and use in source and binary forms, with or without modification. Users are expected to credit the original creation and not use the tool in a manner that infringes upon the intellectual property rights of H2AuxInvest or any third parties.
By using the Hydrogen Infrastructure Costing Tool, you accept this disclaimer in full. If you disagree with any part of this disclaimer, do not use the provided tool or any affiliated websites or services
                </Typography>
            
        </Box>
    );
}

export default Calculator;