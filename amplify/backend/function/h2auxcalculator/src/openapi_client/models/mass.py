# coding: utf-8

"""
    h2AuxCalculatorApi

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 2018-05-24T17:52:00Z
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import json
import pprint
import re  # noqa: F401
from aenum import Enum, no_arg

class Mass(str, Enum):
    """
    Mass
    """

    """
    allowed enum values
    """
    KG = 'KG'

    @classmethod
    def from_json(cls, json_str: str) -> Mass:
        """Create an instance of Mass from a JSON string"""
        return Mass(json.loads(json_str))


