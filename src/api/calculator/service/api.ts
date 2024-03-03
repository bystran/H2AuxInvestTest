import { RequestSchema, ResponseSchema } from "../models";
import { post } from '@aws-amplify/api-rest';


const mockData = {
    "calculation_id": "random_id",
    "dispensers": [
        {
            "id": "dispenser",
            "meta": {
                "title": "Dispenser",
                "description": "This is a dispenser",
                "positives": [
                    "Lowest infrastructure cost",
                    "Industry standard for passenger cars and HDVs"
                ],
                "negatives": [
                    "Additional safety considerations at higher pressures",
                    "Intermediate to low desnity of dispensed hydrogen"
                ]
            },
            "num_dispensers": 9,
            "Pressure": 200,
            "equipment": {
                "min": 122274.69400594455,
                "avg": 135860.77111771615,
                "max": 149446.84822948778
            },
            "equipment_lcoh": {
                "min": 0.09153752306637868,
                "avg": 0.10170835896264298,
                "max": 0.11187919485890727
            },
            "maintenance": {
                "min": 3668.2408201783364,
                "avg": 4075.8231335314845,
                "max": 4483.405446884633
            },
            "maintenance_lcoh": {
                "min": 0.020937447603757625,
                "avg": 0.02326383067084181,
                "max": 0.025590213737926002
            },
            "installation": {
                "min": 19765.308159590062,
                "avg": 21177.502715701838,
                "max": 22541.71501480876
            },
            "installation_lcoh": {
                "min": 0.014796744054698661,
                "avg": 0.01585394393407854,
                "max": 0.01687522324139675
            },
            "energy": {
                "min": 0.0,
                "avg": 0,
                "max": 0.0
            },
            "energy_lcoh": {
                "min": 0.0,
                "avg": 0.0,
                "max": 0.0
            },
            "sum_capex": {
                "min": 142040.00216553462,
                "avg": 157038.273833418,
                "max": 171988.56324429653
            },
            "sum_opex": {
                "min": 3668.2408201783364,
                "avg": 4075.8231335314845,
                "max": 4483.405446884633
            },
            "sum_lcoh": {
                "min": 0.12727171472483495,
                "avg": 0.14082613356756332,
                "max": 0.15434463183823002
            }
        }
    ],
    "compressors": [
        {
            "id": "centrifugal compressor",
            "meta": {
                "title": "Centrifugal Compressor",
                "description": "This is a centrifugal compressor",
                "positives": [
                    "High efficiency",
                    "Suited for large, stable capacities"
                ],
                "negatives": [
                    "High initial cost and complexity",
                    "Sensitive to variations in operating conditions"
                ]
            },
            "power": 27.64868840896707,
            "cooling_energy": 0.3686491787862276,
            "compression_energy": 0.921622946965569,
            "equipment": {
                "min": 147544.36540739398,
                "avg": 163938.18378599331,
                "max": 180332.00216459268
            },
            "equipment_lcoh": {
                "min": 0.11045495440893865,
                "avg": 0.12272772712104296,
                "max": 0.1350004998331473
            },
            "installation": {
                "min": 22353.34127700274,
                "avg": 23950.445992366138,
                "max": 25493.285742194465
            },
            "installation_lcoh": {
                "min": 0.016734202521535613,
                "avg": 0.017929830209754503,
                "max": 0.01908483395223592
            },
            "maintenance": {
                "min": 4426.330962221819,
                "avg": 4918.1455135798,
                "max": 5409.96006493778
            },
            "maintenance_lcoh": {
                "min": 0.025264446131403086,
                "avg": 0.028071606812670093,
                "max": 0.030878767493937108
            },
            "energy": {
                "min": 72.99253739967307,
                "avg": 81.10281933297007,
                "max": 89.21310126626709
            },
            "energy_lcoh": {
                "min": 0.00041662407191594216,
                "avg": 0.00046291563546215804,
                "max": 0.0005092071990083739
            },
            "sum_capex": {
                "min": 169897.70668439672,
                "avg": 187888.62977835946,
                "max": 205825.28790678713
            },
            "sum_opex": {
                "min": 4499.323499621492,
                "avg": 4999.24833291277,
                "max": 5499.1731662040465
            },
            "sum_lcoh": {
                "min": 0.3057404542675866,
                "avg": 0.33838415955785944,
                "max": 0.3709466169566574
            }
        },
        {
            "id": "diaphragm compressor",
            "meta": {
                "title": "Diaphragm Compressor",
                "description": "This is a diaphragm compressor",
                "positives": [
                    "Established and reliable technology",
                    "Suited for high quality applications"
                ],
                "negatives": [
                    "Limited compression capacities",
                    "High sensitivity to feed gas quality"
                ]
            },
            "power": 25.04645891165253,
            "cooling_energy": 0.3339527854887004,
            "compression_energy": 0.8348819637217509,
            "equipment": {
                "min": 136057.19224827393,
                "avg": 151174.6580536377,
                "max": 166292.12385900147
            },
            "equipment_lcoh": {
                "min": 0.10185540413756922,
                "avg": 0.11317267126396577,
                "max": 0.12448993839036238
            },
            "installation": {
                "min": 21197.552140805587,
                "avg": 22712.07786913919,
                "max": 24175.14442534749
            },
            "installation_lcoh": {
                "min": 0.015868953374321447,
                "avg": 0.017002760618077224,
                "max": 0.018098044394702778
            },
            "maintenance": {
                "min": 4081.715767448218,
                "avg": 4535.239741609131,
                "max": 4988.763715770044
            },
            "maintenance_lcoh": {
                "min": 0.0232974644260743,
                "avg": 0.025886071584527,
                "max": 0.028474678742979705
            },
            "energy": {
                "min": 66.12265152676268,
                "avg": 73.46961280751408,
                "max": 80.8165740882655
            },
            "energy_lcoh": {
                "min": 0.00037741239455914776,
                "avg": 0.0004193471050657198,
                "max": 0.00046128181557229174
            },
            "sum_capex": {
                "min": 157254.7443890795,
                "avg": 173886.73592277686,
                "max": 190467.26828434895
            },
            "sum_opex": {
                "min": 4147.83841897498,
                "avg": 4608.709354416645,
                "max": 5069.58028985831
            },
            "sum_lcoh": {
                "min": 0.28279846866504826,
                "avg": 0.31296170114327143,
                "max": 0.3430478866872343
            }
        },
        {
            "id": "piston compressor",
            "meta": {
                "title": "Piston Compressor",
                "description": "This is a piston compressor",
                "positives": [
                    "High efficiency",
                    "Suited for large capacities"
                ],
                "negatives": [
                    "High maintenance requirements",
                    "Not optimal for high quality or high compression ratio operation"
                ]
            },
            "power": 25.13317345910706,
            "cooling_energy": 0.3351089794547608,
            "compression_energy": 0.8377724486369019,
            "equipment": {
                "min": 136443.33316625239,
                "avg": 151603.7035180582,
                "max": 166764.07386986405
            },
            "equipment_lcoh": {
                "min": 0.10214447771467917,
                "avg": 0.11349386412742131,
                "max": 0.12484325054016346
            },
            "installation": {
                "min": 21236.937873927844,
                "avg": 22754.277639738357,
                "max": 24220.062620627967
            },
            "installation_lcoh": {
                "min": 0.015898438399685643,
                "avg": 0.017034352293738498,
                "max": 0.01813167114282113
            },
            "maintenance": {
                "min": 4093.2999949875716,
                "avg": 4548.111105541746,
                "max": 5002.922216095922
            },
            "maintenance_lcoh": {
                "min": 0.02336358444627609,
                "avg": 0.025959538273640104,
                "max": 0.028555492101004117
            },
            "energy": {
                "min": 66.35157793204263,
                "avg": 73.72397548004737,
                "max": 81.09637302805211
            },
            "energy_lcoh": {
                "min": 0.00037871905212353093,
                "avg": 0.00042079894680392325,
                "max": 0.00046287884148431567
            },
            "sum_capex": {
                "min": 157680.27104018023,
                "avg": 174357.98115779657,
                "max": 190984.136490492
            },
            "sum_opex": {
                "min": 4159.651572919614,
                "avg": 4621.8350810217935,
                "max": 5084.0185891239735
            },
            "sum_lcoh": {
                "min": 0.2835704392255289,
                "avg": 0.31381710728320766,
                "max": 0.34398658525094605
            }
        }
    ],
    "storage": [
        {
            "id": "type I/II storage",
            "meta": {
                "title": "Type I/II Storage",
                "description": "This is a type I/II storage",
                "positives": [
                    "Simple and cost effective",
                    "Reliable and durable"
                ],
                "negatives": [
                    "High weight and large size",
                    "Low energy density and working pressure"
                ]
            },
            "capacity": {
                "amount": 10,
                "unit": "kg"
            },
            "pressure": {
                "amount": 34.4738,
                "unit": "bar"
            },
            "equipment": {
                "min": 4874.130565485391,
                "avg": 5415.7006283171,
                "max": 5957.270691148811
            },
            "equipment_lcoh": {
                "min": 0.0036488812562063696,
                "avg": 0.004054312506895965,
                "max": 0.0044597437575855615
            },
            "installation": {
                "min": 1218.5326413713478,
                "avg": 1353.925157079275,
                "max": 1489.3176727872028
            },
            "installation_lcoh": {
                "min": 0.0009122203140515924,
                "avg": 0.0010135781267239913,
                "max": 0.0011149359393963904
            },
            "maintenance": {
                "min": 97.48261130970783,
                "avg": 108.31401256634202,
                "max": 119.14541382297622
            },
            "maintenance_lcoh": {
                "min": 0.0005564075987997023,
                "avg": 0.0006182306653330023,
                "max": 0.0006800537318663027
            },
            "energy": {
                "min": 0,
                "avg": 0,
                "max": 0
            },
            "energy_lcoh": {
                "min": 0.0,
                "avg": 0.0,
                "max": 0.0
            },
            "sum_capex": {
                "min": 6092.66320685674,
                "avg": 6228.055722564666,
                "max": 7446.5883639360145
            },
            "sum_opex": {
                "min": 97.48261130970783,
                "avg": 108.31401256634202,
                "max": 119.14541382297622
            },
            "sum_lcoh": {
                "min": 0.005117509169057665,
                "avg": 0.005686121298952959,
                "max": 0.006254733428848255
            }
        },
        {
            "id": "type III/IV storage",
            "meta": {
                "title": "Type III/IV Storage",
                "description": "This is a type III/IV storage",
                "positives": [
                    "Moderate energy density",
                    "Lightweight and compact"
                ],
                "negatives": [
                    "Moderate initial cost",
                    "Higher inspection and maintenance requirements than type I/II"
                ]
            },
            "capacity": {
                "amount": 10,
                "unit": "kg"
            },
            "pressure": {
                "amount": 34.4738,
                "unit": "bar"
            },
            "equipment": {
                "min": 5538.784733506125,
                "avg": 6154.20525945125,
                "max": 6769.625785396375
            },
            "equipment_lcoh": {
                "min": 0.004146455972961783,
                "avg": 0.004607173303290869,
                "max": 0.005067890633619956
            },
            "installation": {
                "min": 1384.6961833765313,
                "avg": 1538.5513148628124,
                "max": 1692.4064463490938
            },
            "installation_lcoh": {
                "min": 0.0010366139932404457,
                "avg": 0.0011517933258227172,
                "max": 0.001266972658404989
            },
            "maintenance": {
                "min": 110.7756946701225,
                "avg": 123.084105189025,
                "max": 135.39251570792752
            },
            "maintenance_lcoh": {
                "min": 0.0006322813622723886,
                "avg": 0.0007025348469693206,
                "max": 0.0007727883316662529
            },
            "energy": {
                "min": 0,
                "avg": 0,
                "max": 0
            },
            "energy_lcoh": {
                "min": 0.0,
                "avg": 0.0,
                "max": 0.0
            },
            "sum_capex": {
                "min": 6923.480916882656,
                "avg": 7077.336048368938,
                "max": 8462.032231745468
            },
            "sum_opex": {
                "min": 110.7756946701225,
                "avg": 123.084105189025,
                "max": 135.39251570792752
            },
            "sum_lcoh": {
                "min": 0.005815351328474616,
                "avg": 0.006461501476082907,
                "max": 0.007107651623691198
            }
        }
    ]
}


const postCalculate = async (req: RequestSchema): Promise<ResponseSchema> => {
    console.log(req)
    const restOperation = post({
        apiName: 'h2AuxCalculatorApi',
        path: '/calculator/calculate',
        options: {
            body: JSON.parse(JSON.stringify(req)),
        }
    })
    const response = await restOperation.response;
    const responseData: ResponseSchema = (await response.body.json()) as ResponseSchema;
    return responseData;

    return mockData as ResponseSchema;
}

export { postCalculate };