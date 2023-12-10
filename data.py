import pandas as pd

# Replace 'your_excel_file.xlsx' with the actual path to your Excel file
excel_file_path = 'sales_and_eodStocks.xlsx'

# Read the Excel file into a DataFrame
df = pd.read_excel(excel_file_path)

# Convert the 'Date' column to datetime format
df['Date'] = pd.to_datetime(df['Date'], errors='coerce')

# Check the initial data type of the 'Revenue' column
if pd.api.types.is_numeric_dtype(df['Revenue']):
    print("Revenue column is already numeric.")
else:
    # Remove commas from the 'Revenue' column and convert it to numeric
    df['Revenue'] = pd.to_numeric(df['Revenue'].str.replace(',', ''), errors='coerce')
    print("Converted 'Revenue' column to numeric.")

# Group by 'Product_ID' and calculate statistics for each group
grouped_stats = df.groupby('Product_ID').describe()

# Save the grouped statistics to a new Excel file
grouped_stats.to_excel('grouped_statistics.xlsx')

# Check for missing values in the original DataFrame
print(df.isnull().sum())

# Perform further data analysis or visualization as needed
