import pandas as pd

# Replace 'your_excel_file.xlsx' with the actual paths to your Excel files
excel_file_path = 'sales_and_eodStocks.xlsx'
transactions_file_path = 'transactions.xlsx'

# Read the Excel files into DataFrames
df = pd.read_excel(excel_file_path)  # Read the entire table
transactions_df = pd.read_excel(transactions_file_path)  # Read the entire table

# Convert the 'Date' column to datetime format in both DataFrames
df['Date'] = pd.to_datetime(df['Date'], errors='coerce')
transactions_df['Date'] = pd.to_datetime(transactions_df['Date'], errors='coerce')

# Extract month and year from the 'Date' column
df['Month'] = df['Date'].dt.to_period('M')
transactions_df['Month'] = transactions_df['Date'].dt.to_period('M')

# Merge the 'df' DataFrame with the 'transactions_df' based on the 'Product_ID' and 'Month' columns
merged_df = pd.merge(df, transactions_df[['Product_ID', 'Description', 'Month', 'Quantity', 'Price']],
                    on=['Product_ID', 'Month'], how='left')

# Group by 'Product_ID', 'Description', 'Month', and calculate statistics for each group
grouped_stats_df = merged_df.groupby(['Product_ID', 'Description', 'Month']).agg({
    'Sales': ['sum', 'mean', 'std'],
    'Revenue': ['sum', 'mean', 'std'],
    'EndOfDayStock': ['sum', 'mean', 'std'],
    'Quantity': ['sum', 'mean', 'std'],
    'Price': ['sum', 'mean', 'std']
})

# Flatten the column indices
grouped_stats_df.columns = ['_'.join(col).strip() for col in grouped_stats_df.columns.values]

# Reset the index
grouped_stats_df.reset_index(inplace=True)

# Calculate the 'EndOfDayStock/Sales Ratio' column
grouped_stats_df['EndOfDayStock/Sales Ratio'] = grouped_stats_df['EndOfDayStock_sum'] / grouped_stats_df['Sales_sum']

# Save the grouped data to a new Excel file
grouped_stats_df.to_excel('grouped_data.xlsx', index=False)

# Display the first few rows of the grouped DataFrame
print(grouped_stats_df.head())
