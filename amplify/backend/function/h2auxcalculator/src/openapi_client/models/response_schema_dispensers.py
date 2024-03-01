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


from typing import Optional
from pydantic import BaseModel, StrictStr
from openapi_client.models.response_schema_dispensers_meta import ResponseSchemaDispensersMeta
from openapi_client.models.response_schema_dispensers_results import ResponseSchemaDispensersResults

class ResponseSchemaDispensers(BaseModel):
    """
    ResponseSchemaDispensers
    """
    id: Optional[StrictStr] = None
    meta: Optional[ResponseSchemaDispensersMeta] = None
    results: Optional[ResponseSchemaDispensersResults] = None
    __properties = ["id", "meta", "results"]

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
    def from_json(cls, json_str: str) -> ResponseSchemaDispensers:
        """Create an instance of ResponseSchemaDispensers from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of meta
        if self.meta:
            _dict['meta'] = self.meta.to_dict()
        # override the default output from pydantic by calling `to_dict()` of results
        if self.results:
            _dict['results'] = self.results.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> ResponseSchemaDispensers:
        """Create an instance of ResponseSchemaDispensers from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return ResponseSchemaDispensers.parse_obj(obj)

        _obj = ResponseSchemaDispensers.parse_obj({
            "id": obj.get("id"),
            "meta": ResponseSchemaDispensersMeta.from_dict(obj.get("meta")) if obj.get("meta") is not None else None,
            "results": ResponseSchemaDispensersResults.from_dict(obj.get("results")) if obj.get("results") is not None else None
        })
        return _obj


