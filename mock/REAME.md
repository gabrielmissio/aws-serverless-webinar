# Mock 

This lambda function is used for testing and development purposes only. It simply returns a static value when invoked.

## Local Development

To invoke the lambda function locally, navigate to the `mock` directory and run:

```bash
sls invoke local --function main
```

## Deployment

To deploy the lambda function, run the following command from the `mock` directory:

```bash
sls deploy --verbose --stage dev
```
