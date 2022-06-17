import imp
from itertools import product
import graphene
from graphene_django import DjangoObjectType

from .models import (Product)
from .types import (ProductType)
from .mutations import  (ProductMutation)


#  create QueryType to create queries
class Query(graphene.ObjectType):
    product = graphene.List(ProductType)

    # resolve queries (map query to data)
    def resolve_product(self, info, **kwargs):
        return Product.objects.all().order_by('-date_created')


class Mutation(graphene.ObjectType):
    create_product = ProductMutation.Field()