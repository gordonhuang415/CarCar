# Generated by Django 4.0.3 on 2022-08-04 06:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0004_rename_customer_customer_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='name',
            field=models.CharField(max_length=200, unique=True),
        ),
        migrations.AlterField(
            model_name='salesperson',
            name='employee',
            field=models.CharField(max_length=200, unique=True),
        ),
    ]
