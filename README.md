# Resume-On-Cloud

## Overview

<a href="http://mustafalsalem.click/" rel="nofollow">Cloud Resume</a> is a dynamic, highly available personal resume website hosted on AWS. This project leverages a combination of AWS services, Terraform for Infrastructure as Code (IaC), and a fully automated CI/CD pipeline. It incorporates advanced monitoring, alerting, and logging mechanisms through CloudWatch, PagerDuty, Slack, and Jira, ensuring optimal performance and system reliability.

## Features

- **Static Website Hosting:** The website is stored in an Amazon S3 bucket and distributed globally via CloudFront with Origin Access Control (OAC).
- **Custom Domain:** Route 53 manages domain configurations, including MX records for email routing.
- **Visitor Tracking:** Tracks visitor activity using a serverless backend powered by API Gateway, Lambda, and DynamoDB.
- **Infrastructure as Code:** Utilizes Terraform to provision and manage AWS resources.
- **CI/CD Pipeline:** GitHub Actions automates the deployment process for frontend updates.
- **Monitoring and Alerts:** Integrates CloudWatch, PagerDuty, Slack, and Jira for comprehensive monitoring and incident management.
- **CloudWatch Alarms:** Tracks metrics such as Lambda invocation errors and monthly AWS costs.


## Project Structure

```plaintext
.
├── LICENSE
├── README.md
├── frontend
│   ├── index.html
│   ├── script.js
│   └── styles.css
└── terraform
    ├── main.tf
    ├── modules
    │   ├── back-end
    │   │   ├── db.tf
    │   │   ├── lambda.tf
    │   ├── front-end
    │   │   ├── s3.tf
```

### Explanation of Directories and Files

- **frontend/**: Contains the static website files.
  - `index.html`: Main HTML file defining the webpage structure.
  - `script.js`: JavaScript logic for API interactions.
  - `styles.css`: Styling for the website.
- **terraform/**: Holds Terraform configuration files for AWS infrastructure.
  - `main.tf`: Core Terraform configuration to orchestrate infrastructure deployment.
  - `modules/`:
    - **back-end/**: Configures API Gateway, Lambda, and DynamoDB for visitor tracking.
    - **front-end/**: Manages S3, CloudFront, SSL certificates, and Route 53 for hosting and domain management.
    - **monitoring/**: Sets up CloudWatch alarms, integrating with PagerDuty, Slack, and Jira for real-time incident management.
  - `providers.tf`: Defines AWS provider configurations.


## Implementation Details

### 1. **Static Website Hosting**
- **Technology:** Amazon S3, CloudFront
- **Details:** The resume website is hosted in an S3 bucket and distributed worldwide via CloudFront with OAC, ensuring secure and fast content delivery.

### 2. **Visitor Tracking**
- **Technology:** REST API Gateway, Lambda, DynamoDB
- **Details:**
  - API Gateway triggers an AWS Lambda function.
  - The Lambda function updates visitor statistics in DynamoDB and retrieves data for display on the frontend.

### 3. **Infrastructure as Code (IaC)**
- **Technology:** Terraform
- **Details:** All AWS infrastructure components are managed as code, allowing version control, reproducibility, and simplified infrastructure provisioning.

### 4. **CI/CD Pipeline**
- **Technology:** GitHub Actions
- **Details:** Automates frontend deployment, ensuring smooth and rapid updates without manual intervention.

### 5. **Monitoring and Incident Management**
- **Technology:** CloudWatch, PagerDuty, Slack, Jira
- **Details:**
  - **CloudWatch:** Monitors system performance and logs operational events.
  - **PagerDuty:** Escalates critical alerts for immediate response.
  - **Slack:** Provides real-time notifications for system events.
  - **Jira:** Logs incidents and manages issue resolution workflows.

## Future Improvements

🔹 Expand CI/CD pipeline to automate Terraform-based infrastructure updates.

🔹 Implement a resume download feature for enhanced usability.

