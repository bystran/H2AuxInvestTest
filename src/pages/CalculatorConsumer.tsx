

import { Option, Box, Typography, Button, ListItemDecorator, Select, FormControl, FormLabel, Input } from "@mui/joy";


import ProgressTracker from "../components/ProgressTracker";
import ROUTE_CONSTANTS from "../routing/routeConstants";
import { useEffect, useState } from "react";
import { Mass, Pressure, RequestSchema, RequestSchemaDispensingMass, RequestSchemaDispensingPressure, RequestSchemaVehicleTypeEnum } from "../api/calculator";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BuildIcon from '@mui/icons-material/Build';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import { useLocation, useNavigate } from "react-router-dom";

RequestSchemaVehicleTypeEnum

const options = [
    {
        type: RequestSchemaVehicleTypeEnum.Tubetrailer,
        name: 'TUBETRAILER Type A',
        status: "200 bar, 580 kg",
        icon: <LocalShippingIcon />,
        data: {
            bar: {
                value: 200,
                unit: 'BAR'
            },
            kg: {
                value: 580,
                unit: 'KG'
            }
        }
    },
    {
        type: RequestSchemaVehicleTypeEnum.Tubetrailer,
        name: 'TUBETRAILER Type B',
        status: "300 bar, 840 kg",
        icon: <LocalShippingIcon />,
        data: {
            bar: {
                value: 300,
                unit: 'BAR'
            },
            kg: {
                value: 840,
                unit: 'KG'
            }
        }
    },
    {
        type: RequestSchemaVehicleTypeEnum.Tubetrailer,
        name: 'TUBETRAILER Type C',
        status: "380 bar, 1000 kg",
        icon: <LocalShippingIcon />,
        data: {
            bar: {
                value: 380,
                unit: 'BAR'
            },
            kg: {
                value: 1000,
                unit: 'KG'
            }
        }
    },
    {
        type: RequestSchemaVehicleTypeEnum.Tubetrailer,
        name: 'TUBETRAILER Type D',
        status: "450 bar, 1150 kg (non-standard)",
        icon: <LocalShippingIcon />,
        data: {
            bar: {
                value: 450,
                unit: 'BAR'
            },
            kg: {
                value: 1150,
                unit: 'KG'
            }
        }
    },
    {
        type: RequestSchemaVehicleTypeEnum.Tubetrailer,
        name: 'TUBETRAILER Type E',
        status: "500 bar, 1300 kg (non-standard)",
        icon: <LocalShippingIcon />,
        data: {
            bar: {
                value: 500,
                unit: 'BAR'
            },
            kg: {
                value: 1300,
                unit: 'KG'
            }
        }
    },
    {
        type: RequestSchemaVehicleTypeEnum.Car,
        name: 'Car Type A',
        status: '350 bar, 5 kg',
        icon: <DirectionsCarIcon />,
        data: {
            bar: {
                value: 350,
                unit: 'BAR'
            },
            kg: {
                value: 5,
                unit: 'KG'
            }
        }
    },
    {
        type: RequestSchemaVehicleTypeEnum.Car,
        name: 'Car Type B',
        status: '700 bar, 5 kg',
        icon: <DirectionsCarIcon />,
        data: {
            bar: {
                value: 700,
                unit: 'BAR'
            },
            kg: {
                value: 5,
                unit: 'KG'
            }
        }
    },
    {
        type: RequestSchemaVehicleTypeEnum.Hdv,
        name: 'HDV Type A',
        status: '350 bar, 30 kg',
        icon: <DirectionsBusIcon />,
        data: {
            bar: {
                value: 350,
                unit: 'BAR'
            },
            kg: {
                value: 30,
                unit: 'KG'
            }
        }
    },
    {
        type: RequestSchemaVehicleTypeEnum.Hdv,
        name: 'HDV Type B',
        status: '700 bar, 30 kg',
        icon: <DirectionsBusIcon />,
        data: {
            bar: {
                value: 700,
                unit: 'BAR'
            },
            kg: {
                value: 30,
                unit: 'KG'
            }
        }
    },
    {
        type: RequestSchemaVehicleTypeEnum.Custom,
        name: 'Custom',
        status: 'Specify your vehicle',
        icon: <BuildIcon />,
        data: {
            bar: {
                value: 700,
                unit: 'BAR'
            },
            kg: {
                value: 5,
                unit: 'KG'
            }
        }
    }
] as const;


const CalculatorConsumer = () => {

    const [request, setRequest] = useState({} as RequestSchema);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const locationRequest = location.state as RequestSchema;
        if (!locationRequest || !locationRequest.dispensing_type) {
            navigate(ROUTE_CONSTANTS.CALCULATOR_PLANT_TYPE)
        }
        setRequest({
            ...locationRequest,
        })
    }, [])

    const goToPrevious = () => {
        navigate(ROUTE_CONSTANTS.CALCULATOR_PLANT_TYPE, { state: request })
    }

    const goToNext = () => {
        if (canProceed()) {
            navigate(ROUTE_CONSTANTS.CALCULATOR_SALES, { state: request })
        }
    }

    const canProceed = () => {
        return request.vehicle_type !== undefined
            && request.dispensing_mass !== undefined
            && request.dispensing_mass.value !== undefined
            && request.dispensing_pressure !== undefined
            && request.dispensing_pressure.value !== undefined;
    }

    const handleChange = (
        event: React.SyntheticEvent | null,
        newValue: string | null,
    ) => {
        const name = newValue;
        const option = options.find(option => option.name === name);
        if (!option) return;
        setRequest({
            ...request,
            vehicle_type: option.type as RequestSchemaVehicleTypeEnum,
            dispensing_mass: option.data.kg as RequestSchemaDispensingMass,
            dispensing_pressure: option.data.bar as RequestSchemaDispensingPressure
        })
    }

    const handleDispensingUnitChange = (
        event: React.SyntheticEvent | null,
        newValue: string | null,
    ) => {
        setRequest({
            ...request,
            dispensing_pressure: {
                ...request.dispensing_pressure,
                unit: Pressure[newValue as keyof typeof Pressure]
            }
        })
    }

    const handleDispensingMassUnitChange = (
        event: React.SyntheticEvent | null,
        newValue: string | null,
    ) => {
        setRequest({
            ...request,
            dispensing_mass: {
                ...request.dispensing_mass,
                unit: Mass[newValue as keyof typeof Mass]
            }
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filterDropDown = (option: any) => {
        if (option.type as RequestSchemaVehicleTypeEnum === RequestSchemaVehicleTypeEnum.Custom) {
            return true;
        } else if (request.dispensing_type === "VEHICLE" && option.type !== RequestSchemaVehicleTypeEnum.Tubetrailer) {
            return true;
        } else if (request.dispensing_type === "TUBETRAILER" && option.type === RequestSchemaVehicleTypeEnum.Tubetrailer) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
            }}
        >
            <Box
                py={'70px'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <ProgressTracker activeStep={2} />
            </Box>
            <Box
                pb={'50px'}
                sx={{
                    maxWidth: '800px',
                    margin: 'auto'
                }}
            >
                <Typography level="h3" pb="20px">
                    H2 Equipment
                </Typography>
                <Typography>
                    Enter details of the hydrogen equipment you are looking to supply on site,
                    if you are unsure of this please see the 'Choosing Your Inputs' portion of the documentation,
                    or use default values provided for commonly available industry equipment.
                </Typography>
            </Box>
            <form>
                <Box
                    pb={'50px'}
                    sx={{
                        maxWidth: '800px',
                        margin: 'auto',
                        display: 'grid',
                        gap: 3,
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    <Box
                        sx={{
                            maxWidth: "400px",
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            '& > *': { flex: 'auto' },
                        }}
                    >
                        <Typography>[add vehicle select and manual override for vehicle storage volume and pressure]</Typography>
                        <Select
                            size="lg"
                            onChange={handleChange}
                            defaultValue="Eric"
                            slotProps={{
                                listbox: {
                                    sx: {
                                        '--ListItemDecorator-size': '48px',
                                    },
                                },
                            }}
                            sx={{
                                minWidth: 240,
                            }}
                        >
                            {options.filter(filterDropDown).map(data => (
                                <Option
                                    key={data.name}
                                    value={data.name}
                                    label={data.name} // The appearance of the selected value will be a string
                                >
                                    <ListItemDecorator>
                                        {data.icon}
                                    </ListItemDecorator>
                                    <Box component="span" sx={{ display: 'block' }}>
                                        <Typography component="span" level="title-sm">
                                            {data.name}
                                        </Typography>
                                        <Typography level="body-xs">{data.status}</Typography>
                                    </Box>
                                </Option>
                            ))}
                        </Select>
                        {request.vehicle_type === RequestSchemaVehicleTypeEnum.Custom && <>
                            <FormControl>
                                <FormLabel>Dispensing Pressure</FormLabel>
                                <Input
                                    name="dispensing_pressure"
                                    type="number"
                                    placeholder="Placeholder"
                                    size="lg"
                                    value={request?.dispensing_pressure?.value}
                                    onChange={(event) => setRequest({
                                        ...request,
                                        dispensing_pressure: {
                                            ...request.dispensing_pressure,
                                            value: parseFloat(event.target.value),
                                        }
                                    })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Units</FormLabel>
                                <Select size="lg" defaultValue={Object.keys(Pressure)[0]} onChange={handleDispensingUnitChange}
                                    sx={{
                                        width: "110px",
                                    }}
                                >
                                    {Object.entries(Pressure).map(([key, value]) => (
                                        <Option key={key} value={key}>
                                            {value}
                                        </Option>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Dispensing Mass</FormLabel>
                                <Input
                                    name="dispensing_mass"
                                    type="number"
                                    placeholder="Placeholder"
                                    size="lg"
                                    value={request?.dispensing_mass?.value}
                                    onChange={(event) => setRequest({
                                        ...request,
                                        dispensing_mass: {
                                            ...request.dispensing_mass,
                                            value: parseFloat(event.target.value),
                                        }
                                    })}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Units</FormLabel>
                                <Select size="lg" defaultValue={request.dispensing_mass.unit} onChange={handleDispensingMassUnitChange}
                                    sx={{
                                        width: "110px",
                                    }}
                                >
                                    {Object.entries(Mass).map(([key, value]) => (
                                        <Option key={key} value={value}>
                                            {value}
                                        </Option>
                                    ))}
                                </Select>
                            </FormControl>
                        </>}
                    </Box>



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
                            onClick={goToPrevious}
                            size="lg" variant="outlined" color="neutral">
                            Back
                        </Button>
                        <Button
                            component="a"
                            onClick={goToNext}
                            size="lg"
                        >
                            Next
                        </Button>
                    </Box>
                </Box>
            </form >
            <Typography color="neutral" fontSize="sm" fontWeight="sm">
                All calculations and data provided by H2AuxInvest's Hydrogen Infrastructure Costing Tool are for informational purposes only. While this tool aims to provide helpful and accurate information, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information produced.
                The information provided by the Hydrogen Infrastructure Costing Tool is not a substitute for professional advice. Engineering decisions should not be made solely on the basis of this tool. Always seek the guidance of qualified professionals before making any such decisions.
                H2AuxInvest's Hydrogen Infrastructure Costing Tool is an open-source project developed for educational and informational purposes under principles of fair use. The tool is designed to support and further the understanding and roll-out of hydrogen infrastructure.
                In no event shall H2AuxInvest or contributors to the Hydrogen Infrastructure Costing Tool be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence, or other torts, arising out of or in connection with the use of the tool or the contents of the tool. H2AuxInvest reserves the right to make additions, deletions, or modifications to the contents of the tool at any time without prior notice.
                The Hydrogen Infrastructure Costing Tool is provided under a MIT License, which allows for redistribution and use in source and binary forms, with or without modification. Users are expected to credit the original creation and not use the tool in a manner that infringes upon the intellectual property rights of H2AuxInvest or any third parties.
                By using the Hydrogen Infrastructure Costing Tool, you accept this disclaimer in full. If you disagree with any part of this disclaimer, do not use the provided tool or any affiliated websites or services
            </Typography>
        </Box >
    );
}

export default CalculatorConsumer;