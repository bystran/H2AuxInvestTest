# coding: utf-8

"""
    h2AuxCalculatorApi

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 2018-05-24T17:52:00Z
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json


from typing import Union
from pydantic import BaseModel, Field, confloat, conint
from openapi_client.models.pressure import Pressure

class RequestSchemaStoragePressure(BaseModel):
    """
    RequestSchemaStoragePressure
    """
    value: Union[confloat(le=2E+4, ge=3E+1, strict=True), conint(le=20000, ge=30, strict=True)] = Field(...)
    unit: Pressure = Field(...)
    __properties = ["value", "unit"]

    class Config:
        """Pydantic configuration"""
        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> RequestSchemaStoragePressure:
        """Create an instance of RequestSchemaStoragePressure from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> RequestSchemaStoragePressure:
        """Create an instance of RequestSchemaStoragePressure from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return RequestSchemaStoragePressure.parse_obj(obj)

        _obj = RequestSchemaStoragePressure.parse_obj({
            "value": obj.get("value"),
            "unit": obj.get("unit")
        })
        return _obj


