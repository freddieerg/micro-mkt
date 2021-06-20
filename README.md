# MicroMkt Coding Test (BTC Ticker)

A simple CLI BTC ticker to get the current price of BTC at a set interval & duration.

## Installation

Git clone this repo into your desired directory.

```bash
git clone https://github.com/freddieerg/micro-mkt.git
```

Download dependencies using your chosen package manager.

```bash
yarn install
```

## Usage
Automatically build & run using the following script:

Both duration & interval are optional arguments (in seconds) that default to 1s each.

```bash
yarn start -d DURATION -i INTERVAL
```

## Testing
Testing is done via Jest using ts-jest.
```bash
yarn test
```
