# Generated by Django 3.2 on 2022-06-17 17:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0004_alter_product_date_created'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='stock_id',
            new_name='sku',
        ),
    ]