async function main() {
    const [owner, randoPerson1, randoPerson2] = await ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther('0.1'),
    });
    await waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);

    let contractBalance = await hre.ethers.provider.getBalance(
        waveContract.address
    );
    console.log(
        'Contract balance:',
        hre.ethers.utils.formatEther(contractBalance)
    )

    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave("A message!");
    await waveTxn.wait();

    contractBalance = await hre.ethers.provider.getBalance(
        waveContract.address
    );
    console.log(
        'Contract balance:',
        hre.ethers.utils.formatEther(contractBalance)
    )

    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randoPerson1).wave("Another message!");
    await waveTxn.wait();

    contractBalance = await hre.ethers.provider.getBalance(
        waveContract.address
    );
    console.log(
        'Contract balance:',
        hre.ethers.utils.formatEther(contractBalance)
    )

    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randoPerson2).wave("A third message!");
    await waveTxn.wait();

    contractBalance = await hre.ethers.provider.getBalance(
        waveContract.address
    );
    console.log(
        'Contract balance:',
        hre.ethers.utils.formatEther(contractBalance)
    )

    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randoPerson2).wave("A fourth message!");
    await waveTxn.wait();

    contractBalance = await hre.ethers.provider.getBalance(
        waveContract.address
    );
    console.log(
        'Contract balance:',
        hre.ethers.utils.formatEther(contractBalance)
    )

    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randoPerson1).wave("A fifth message!");
    await waveTxn.wait();

    contractBalance = await hre.ethers.provider.getBalance(
        waveContract.address
    );
    console.log(
        'Contract balance:',
        hre.ethers.utils.formatEther(contractBalance)
    )

    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randoPerson2).wave("A sixth message!");
    await waveTxn.wait();

    contractBalance = await hre.ethers.provider.getBalance(
        waveContract.address
    );
    console.log(
        'Contract balance:',
        hre.ethers.utils.formatEther(contractBalance)
    )

    waveCount = await waveContract.getTotalWaves();

    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});