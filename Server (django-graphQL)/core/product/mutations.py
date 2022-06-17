import graphene

from .models import Product
from .types import ProductType

class ProductMutation(graphene.Mutation):

    # response output
    id = graphene.Int()
    name = graphene.String()
    description = graphene.String()
    stock_id = graphene.String()
    price = graphene.Decimal()
    image = graphene.String()


    # request input
    class Arguments:
        name = graphene.String(required=True)
        description = graphene.String(required=True)
        stock_id = graphene.String(required=True)
        price = graphene.Decimal(required=True)
        image = graphene.String(required=True)
    

    def mutate(self, info, name, description, stock_id, price, image):

        productItem = Product(
            name = name,
            description = description,
            stock_id = stock_id,
            price = price,
            image = image
        )
        productItem.save()  # save to db

        # return saved item back to class atrr (response output)
        return ProductMutation(
            id = productItem.id,
            name = productItem.name,
            description = productItem.description,
            stock_id = productItem.stock_id,
            price = productItem.price,
            image = productItem.image,
        )