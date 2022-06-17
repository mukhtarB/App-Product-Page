import imp
import graphene
from graphene_django import DjangoObjectType

from .models import (Product)

class ProductType(DjangoObjectType):
    pass



class Query(graphene.ObjectType):
    pass