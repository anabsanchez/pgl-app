import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import uuid from "react-native-uuid";

const uncheckedIcon = require("../assets/images/shopping-list/icons/unchecked.png");
const checkedIcon = require("../assets/images/shopping-list/icons/checked.png");
const addIcon = require("../assets/images/shopping-list/icons/add.png");
const deleteIcon = require("../assets/images/shopping-list/icons/delete.png");

type Product = {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unitPrice: number;
  obtained: boolean;
};

const ShoppingList = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: uuid.v4(),
      name: "Apples",
      category: "Produce",
      quantity: 2,
      unitPrice: 1.5,
      obtained: false,
    },
    {
      id: uuid.v4(),
      name: "Bread",
      category: "Bakery",
      quantity: 1,
      unitPrice: 2.0,
      obtained: false,
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    const total = products
      .filter((product) => product.obtained)
      .reduce((sum, product) => sum + product.quantity * product.unitPrice, 0);
    setTotalPrice(total);
  };

  const toggleObtained = (id: string) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === id
          ? { ...product, obtained: !product.obtained }
          : product
      );
      calculateTotalPrice();
      return updatedProducts;
    });
  };

  const deleteProduct = (id: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
    calculateTotalPrice();
  };

  const renderFooter = () => (
    <TouchableOpacity style={styles.addButton} onPress={() => alert("WIP")}>
      <Image source={addIcon} style={styles.addButtonImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shopping List</Text>
      </View>

      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPriceText}>
          Total: €{totalPrice.toFixed(2)}
        </Text>
      </View>

      {products.length === 0 ? (
        <View>
          <Text style={styles.emptyMessage}>Your shopping list is empty!</Text>
          {renderFooter()}
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <TouchableOpacity
                onPress={() => toggleObtained(item.id)}
                style={styles.checkboxContainer}
              >
                <Image
                  source={item.obtained ? checkedIcon : uncheckedIcon}
                  style={styles.checkboxImage}
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.productName,
                  item.obtained && styles.obtainedText,
                ]}
              >
                {item.name}
              </Text>
              <Text style={styles.productDetails}>
                {item.quantity} x €{item.unitPrice.toFixed(2)}
              </Text>
              <TouchableOpacity
                onPress={() => deleteProduct(item.id)}
                style={styles.deleteButton}
              >
                <Image source={deleteIcon} style={styles.deleteButtonImage} />
              </TouchableOpacity>
            </View>
          )}
          ListFooterComponent={renderFooter}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F49879",
  },
  header: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F49879",
  },
  totalPriceContainer: {
    alignSelf: "flex-end",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "rgba(245, 245, 245, 0.3)",
    borderRadius: 5,
  },
  totalPriceText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    color: "#FFFFFF",
  },
  emptyMessage: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    color: "#FFFFFF",
  },
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(245, 245, 245, 0.3)",
    marginBottom: 10,
    borderRadius: 5,
  },
  productName: {
    flex: 1,
    fontSize: 16,
    color: "#FFFFFF",
  },
  productDetails: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  obtainedText: {
    textDecorationLine: "line-through",
  },
  checkboxContainer: {
    marginRight: 10,
  },
  checkboxImage: {
    width: 20,
    height: 20,
  },
  addButton: {
    marginTop: 10,
    backgroundColor: "rgba(245, 245, 245, 0.3)",
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  addButtonImage: {
    width: 20,
    height: 20,
  },
  deleteButton: {
    marginLeft: 10,
  },
  deleteButtonImage: {
    width: 20,
    height: 20,
  },
});

export default ShoppingList;
