import graphene

from .models import Product
from .types import ProductType

class ProductMutation(graphene.Mutation):

    # response output
    id = graphene.Int()
    name = graphene.String()
    description = graphene.String()
    sku = graphene.String()
    price = graphene.Decimal()
    image = graphene.String()


    # request input
    class Arguments:
        name = graphene.String(required=True)
        description = graphene.String(required=True)
        sku = graphene.String(required=True)
        price = graphene.Decimal(required=True)
        image = graphene.String(required=True)
    

    def mutate(self, info, name, description, sku, price, image):

        productItem = Product(
            name = name,
            description = description,
            sku = sku,
            price = price,
            image = image
        )
        productItem.save()  # save to db

        # return saved item back to class atrr (response output)
        return ProductMutation(
            id = productItem.id,
            name = productItem.name,
            description = productItem.description,
            sku = productItem.sku,
            price = productItem.price,
            image = productItem.image,
        )