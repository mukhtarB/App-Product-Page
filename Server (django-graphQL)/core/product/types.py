from graphene_django import DjangoObjectType

from .models import (Product)

# create graphQL type mapped to django model
class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = '__all__'