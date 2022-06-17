import graphene

import product.schema


class Query(product.schema.Query, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)