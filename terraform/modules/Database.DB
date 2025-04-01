# Create Database Table
resource "aws_dynamodb_table" "VisitorCount" {
    name = "visitor_count"
    billing_mode = "PAY_PER_REQUEST" # On-demand billing
    hash_key = "id"

    attributes {
    "id": {
    "S": "count"
  },
    "visitor_Count": {
    "S": "0"
  }
}
}
