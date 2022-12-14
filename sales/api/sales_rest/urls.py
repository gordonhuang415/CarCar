from django.urls import path
from .views import  api_customer_list, api_sales_list, api_sales_person_list, api_show_history


urlpatterns = [
    path('sales/', api_sales_list, name="api_sales_list"),
    path('sales_history/', api_show_history, name="api_show_history"),
    path('customers/', api_customer_list, name="api_customer_list"),
    path('sales_persons/', api_sales_person_list, name="api_sales_person_list"),
]
