from email.mime import image
from pyexpat import model
from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    stock_id = models.CharField(max_length=100, blank=False, null=False)
    price = models.DecimalField(max_digits=6, decimal_places=2, blank=False, null=False)
    image = models.URLField(blank=False, null=False)
    date_created = models.DateTimeField(auto_now_add=True, null = True)

    def __str__(self) -> str:
        return f'{self.name}'