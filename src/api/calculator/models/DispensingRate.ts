// tslint:disable
/**
 * h2AuxCalculatorApi
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2018-05-24T17:52:00Z
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface DispensingRate
 */
export interface DispensingRate {
    /**
     * @type {number}
     * @memberof DispensingRate
     */
    value?: number;
    /**
     * @type {string}
     * @memberof DispensingRate
     */
    unit?: DispensingRateUnitEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum DispensingRateUnitEnum {
    KgPerHour = 'KG_PER_HOUR',
    VehiclesPerHour = 'VEHICLES_PER_HOUR',
    VehiclesPerDay = 'VEHICLES_PER_DAY',
    KgPerYear = 'KG_PER_YEAR'
}

