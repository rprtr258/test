// https://github.com/pahimar/Equivalent-Exchange-3/blob/master/src/main/java/com/pahimar/ee/util/CalcinationUtils.java
// contains non-ascii symbols: (mu) on line 32, (sigma) on line 33
package com.pahimar.ee.util;

import net.minecraft.item.ItemStack;

import java.util.Random;

public class CalcinationUtils {

    private static final Random RANDOM = new Random();

    /**
     * TODO Finish JavaDoc
     *
     * @param itemStack
     * @return
     */
    public static ItemStack getCalcinationResult(ItemStack itemStack) {

        if (itemStack != null) {

            // TODO Uncomment after reimplemented
//            EnergyValue dustValue = EnergyValueRegistryProxy.getEnergyValue(new ItemStack(ModItems.alchemicalDust, 1, 3));
//            EnergyValue itemStackValue = EnergyValueRegistryProxy.getEnergyValue(itemStack);
//
//            if (dustValue != null && itemStackValue != null) {
//
//                int dustAmount = (int) Math.floor(itemStackValue.getValue() / dustValue.getValue());
//                float residualEMC = itemStackValue.getValue() - (dustAmount * dustValue.getValue());
//
//                double u = (double) residualEMC / dustValue.getValue(); // expected value (µ)
//                double s = u / 2; // deviation (σ)
//                u *= 1 - 0.0043451773677092; // negative cut-off correction factor
//                dustAmount += (int) (Math.max(0, RANDOM.nextGaussian() * s + u) + RANDOM.nextDouble());
//
//                if (dustAmount > 0) {
//                    return new ItemStack(ModItems.alchemicalDust, dustAmount, 3);
//                }
//            }
//
//            return new ItemStack(ModItems.alchemicalDust, 1, 0);
        }

        return null;
    }
}
