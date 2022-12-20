/* 
    This file contains an array of objects as tasks, to be loaded in the execution.
*/
var allTasks = [
      {
            'id': '1',
            'question': 'Why is AWS more economical than traditional data centers for applications with varying compute workloads?',
            'answers': [
                  {
                        'answer': 'A) Amazon EC2 costs are billed on a monthly basis.',
                        'correct': false
                  },
                  {
                        'answer': 'B) Users retain full administrative access to their Amazon EC2 instances.',
                        'correct': false
                  },
                  {
                        'answer': 'C) Amazon EC2 instances can be launched on demand when needed.',
                        'correct': false
                  },
                  {
                        'answer': 'D) Users can permanently run enough instances to handle peak workloads.',
                        'correct': false
                  }

            ],
            'justify': 'C - The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load.'
      },
      {
            'id': '2',
            'question': 'Which AWS service would simplify the migration of a database to AWS?',
            'answers': [
                  {
                        'answer': 'A) AWS Storage Gateway',
                        'correct': false
                  },
                  {
                        'answer': 'B) AWS Database Migration Service (AWS DMS)',
                        'correct': false
                  },
                  {
                        'answer': 'C) Amazon EC2',
                        'correct': false
                  },
                  {
                        'answer': 'D) Amazon AppStream 2.0',
                        'correct': false
                  }

            ],
            'justify': 'B - AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.'
      },
      {
            'id': '3',
            'question': '3) Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?',
            'answers': [
                  {
                        'answer': 'A) AWS Config',
                        'correct': false
                  },
                  {
                        'answer': 'B) AWS OpsWorks',
                        'correct': false
                  },
                  {
                        'answer': 'C) AWS SDK',
                        'correct': false
                  },
                  {
                        'answer': 'D) AWS Marketplace',
                        'correct': false
                  }

            ],
            'justify': 'B - AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.'
      },
      {
            'id': '4',
            'question': 'Which AWS networking service enables a company to create a virtual network within AWS?',
            'answers': [
                  {
                        'answer': 'A) AWS Config',
                        'correct': false
                  },
                  {
                        'answer': 'B) Amazon Route 53',
                        'correct': false
                  },
                  {
                        'answer': 'C) AWS Direct Connect',
                        'correct': false
                  },
                  {
                        'answer': 'D) Amazon Virtual Private Cloud (Amazon VPC)',
                        'correct': false
                  }

            ],
            'justify': 'B - AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.'
      },
      {
            'id': '5',
            'question': 'Which of the following is an AWS responsibility under the AWS shared responsibility model?',
            'answers': [
                  {
                        'answer': 'A) Configuring third-party applications',
                        'correct': false
                  },
                  {
                        'answer': 'B) Maintaining physical hardware',
                        'correct': false
                  },
                  {
                        'answer': 'C) Securing application access and data',
                        'correct': false
                  },
                  {
                        'answer': 'D) Managing guest operating systems',
                        'correct': false
                  }

            ],
            'justify': 'B - AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.'
      },
      {
            'id': '6',
            'question': 'Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?',
            'answers': [
                  {
                        'answer': 'A) AWS Regions',
                        'correct': false
                  },
                  {
                        'answer': 'B) Edge locations',
                        'correct': false
                  },
                  {
                        'answer': 'C) Availability Zones',
                        'correct': false
                  },
                  {
                        'answer': 'D) Virtual Private Cloud (VPC)',
                        'correct': false
                  }

            ],
            'justify': 'B - AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.'
      },
      {
            'id': '7',
            'question': 'How would a system administrator add an additional layer of login security to a user\'s AWS Management Console?',
            'answers': [
                  {
                        'answer': 'A) Use Amazon Cloud Directory',
                        'correct': false
                  },
                  {
                        'answer': 'B) Audit AWS Identity and Access Management (IAM) roles',
                        'correct': false
                  },
                  {
                        'answer': 'C) Enable multi-factor authentication',
                        'correct': false
                  },
                  {
                        'answer': 'D) Enable AWS CloudTrail',
                        'correct': false
                  }

            ],
            'justify': 'B - AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.'
      },
      {
            'id': '8',
            'question': 'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?',
            'answers': [
                  {
                        'answer': 'A) AWS Trusted Advisor',
                        'correct': false
                  },
                  {
                        'answer': 'B) AWS CloudTrail',
                        'correct': false
                  },
                  {
                        'answer': 'C) AWS X-Ray',
                        'correct': false
                  },
                  {
                        'answer': 'D) AWS Identity and Access Management (AWS IAM)',
                        'correct': false
                  }

            ],
            'justify': 'B - AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.'
      },
      {
            'id': '9',
            'question': 'Which service would be used to send alerts based on Amazon CloudWatch alarms?',
            'answers': [
                  {
                        'answer': 'A) Amazon Simple Notification Service (Amazon SNS)',
                        'correct': false
                  },
                  {
                        'answer': 'B) AWS CloudTrail',
                        'correct': false
                  },
                  {
                        'answer': 'C) AWS Trusted Advisor',
                        'correct': false
                  },
                  {
                        'answer': 'D) Amazon Route 53',
                        'correct': false
                  }

            ],
            'justify': 'B - AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.'
      },
      {
            'id': '10',
            'question': 'Where can a user find information about prohibited actions on the AWS infrastructure?',
            'answers': [
                  {
                        'answer': 'A) AWS Trusted Advisor',
                        'correct': false
                  },
                  {
                        'answer': 'B) AWS Identity and Access Management (IAM)',
                        'correct': false
                  },
                  {
                        'answer': 'C) AWS Billing Console',
                        'correct': false
                  },
                  {
                        'answer': 'D) AWS Acceptable Use Policy',
                        'correct': false
                  }

            ],
            'justify': 'B - AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.'
      },
];