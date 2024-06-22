/* eslint-disable react-hooks/exhaustive-deps */


import { Box, Typography, Input, Select, Option, FormControl, FormLabel, FormHelperText } from "@mui/joy";

import ROUTE_CONSTANTS from "../routing/routeConstants";
import { Pressure, RequestSchema } from "../api/calculator";
import { useLocation, useNavigate } from "react-router-dom";
import schema from '../api/calculator/schema.json';
import { InfoOutlined } from "@mui/icons-material";
import CalculatorInputLayout from "../components/CalculatorInputLayout";
import useRequest from "../hooks/useValidatedRequestForm";
import useGetSubSchema from "../hooks/useGetSubSchema";




const CalculatorIntake = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const locationRequest = location.state as RequestSchema;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const modifiedSchema = useGetSubSchema(['hydrogen_inlet_pressure'], schema)
    const { request, errorMessages, handleChange, validateForm } = useRequest({
        ...locationRequest,
        hydrogen_inlet_pressure: {
            value: locationRequest?.hydrogen_inlet_pressure?.value ?? undefined,
            unit: locationRequest?.hydrogen_inlet_pressure?.unit ?? Pressure[Object.keys(Pressure)[0] as keyof typeof Pressure],
        }
    }, modifiedSchema);



    const canProceed = () => {
        console.log(Object.keys(errorMessages));

        return hasAllRequiredFields() && Object.keys(errorMessages).length === 0;
    }


    const hasAllRequiredFields = () => {
        return request.hydrogen_inlet_pressure.value !== undefined && request.hydrogen_inlet_pressure.unit !== undefined;
    }

    const goToPrevious = () => {
        navigate(ROUTE_CONSTANTS.CALCULATOR, { state: request })
    }

    const goToNext = () => {
        const isValid = validateForm();
        if (isValid && canProceed()) {
            navigate(ROUTE_CONSTANTS.CALCULATOR_PLANT_TYPE, { state: request })
        }
    }


    return (
        <CalculatorInputLayout
            activeStep={0}
            onBack={goToPrevious}
            onNext={goToNext}
        >
            <Box
                className='content'
                sx={theme => ({
                    paddingBottom: theme.spacing(8)
                })}
            >
                <Typography level="h3" fontSize={'lg'} pb="20px">
                    H2 Supply
                </Typography>
                <Typography fontSize={'sm'}>
                    In order to calcuate the size and cost of your hydrogen infrastructure, we need to start with an estimate of the supply pressure and units of hydrogen delivered to the site.
                    If you are unsure of this please see the 'Choosing Your Inputs' portion of the documentation, or use a standard assumption provided to explore the tool.
                </Typography>
            </Box>
            <Box
                sx={{
                    maxWidth: "420px",
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    '& > *': { flex: 'auto' },
                }}
            >
                <FormControl error={!!errorMessages['hydrogen_inlet_pressure.value']}>
                    <FormLabel>Inlet Pressure</FormLabel>
                    <Input
                        name="hydrogen_inlet_pressure"
                        type="number"
                        placeholder="7"
                        size="lg"
                        value={request?.hydrogen_inlet_pressure?.value ?? undefined}
                        onChange={(event) => handleChange(
                            parseFloat(event.target.value),
                            ['hydrogen_inlet_pressure', 'value'])}
                    />
                    {!!errorMessages['hydrogen_inlet_pressure.value'] && <FormHelperText>
                        <InfoOutlined />
                        {errorMessages['hydrogen_inlet_pressure.value']}
                    </FormHelperText>}
                    {!!errorMessages['hydrogen_inlet_pressure'] && <FormHelperText>
                        <InfoOutlined />
                        {errorMessages['hydrogen_inlet_pressure']}
                    </FormHelperText>}
                </FormControl>
                <FormControl error={!!errorMessages['hydrogen_inlet_pressure.unit'] || !!errorMessages['hydrogen_inlet_pressure']}>
                    <FormLabel>Units</FormLabel>
                    <Select size="lg" color="neutral"
                        value={request.hydrogen_inlet_pressure?.unit ?? ''}
                        onChange={(_e, value) => handleChange(value ?? '', ['hydrogen_inlet_pressure', 'unit'])}
                        sx={{
                            width: "110px",
                        }}
                    >
                        {Object.entries(Pressure).map(([key, value]) => (
                            <Option key={key} value={value}>
                                {value}
                            </Option>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </CalculatorInputLayout>
    );
}

export default CalculatorIntake;