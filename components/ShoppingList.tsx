import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  Button,
  Alert,
} from "react-native";
import uuid from "react-native-uuid";

const uncheckedIcon = require("../assets/images/shopping-list/icons/unchecked.png");
const checkedIcon = require("../assets/images/shopping-list/icons/checked.png");
const addIcon = require("../assets/images/shopping-list/icons/add.png");
const deleteIcon = require("../assets/images/shopping-list/icons/delete.png");
const editIcon = require("../assets/images/shopping-list/icons/edit.png");

const bakeryImage = require("../assets/images/shopping-list/products/bakery.png");
const cannedImage = require("../assets/images/shopping-list/products/canned.png");
const drinksImage = require("../assets/images/shopping-list/products/drinks.png");
const fishImage = require("../assets/images/shopping-list/products/fish.png");
const meatImage = require("../assets/images/shopping-list/products/meat.png");
const otherImage = require("../assets/images/shopping-list/products/other.png");
const produceImage = require("../assets/images/shopping-list/products/produce.png");

const categoryImages: { [key: string]: any } = {
  bakery: bakeryImage,
  canned: cannedImage,
  drinks: drinksImage,
  fish: fishImage,
  meat: meatImage,
  other: otherImage,
  produce: produceImage,
};

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
  const [modalVisible, setModalVisible] = useState(false);

  const [newProductName, setNewProductName] = useState("");
  const [newProductCategory, setNewProductCategory] = useState("category");
  const [newProductQuantity, setNewProductQuantity] = useState("1");
  const [newProductUnitPrice, setNewProductUnitPrice] = useState("0");

  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  const calculateTotalPrice = (productsToCalculate?: Product[]) => {
    const productsToUse = productsToCalculate || products;
    const total = productsToUse
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

      calculateTotalPrice(updatedProducts);
      return updatedProducts;
    });
  };

  const deleteProduct = (id: string) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter(
        (product) => product.id !== id
      );

      calculateTotalPrice(updatedProducts);
      return updatedProducts;
    });
  };

  const handleAddOrEditProduct = () => {
    if (
      !newProductName.trim() ||
      !newProductQuantity ||
      !newProductUnitPrice ||
      newProductCategory === "category"
    ) {
      Alert.alert("Error", "Please fill out all fields, including a category.");
      return;
    }

    const newProduct = {
      id: editingProductId ?? uuid.v4(),
      name: newProductName,
      category: newProductCategory,
      quantity: parseInt(newProductQuantity, 10),
      unitPrice: parseFloat(newProductUnitPrice),
      obtained: false,
    };

    if (editingProductId) {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editingProductId ? newProduct : product
        )
      );
    } else {
      setProducts((prev) => [...prev, newProduct]);
    }

    setModalVisible(false);
    setNewProductName("");
    setNewProductCategory("category");
    setNewProductQuantity("1");
    setNewProductUnitPrice("0");
    setEditingProductId(null);
    calculateTotalPrice();
  };

  const startEditingProduct = (product: Product) => {
    setNewProductName(product.name);
    setNewProductCategory(product.category);
    setNewProductQuantity(String(product.quantity));
    setNewProductUnitPrice(String(product.unitPrice));
    setEditingProductId(product.id);
    setModalVisible(true);
  };

  const renderFooter = () => (
    <TouchableOpacity
      style={styles.addButton}
      onPress={() => setModalVisible(true)}
    >
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

              <Image
                source={categoryImages[item.category]}
                style={styles.categoryImage}
              />

              <Text style={styles.productDetails}>
                {item.quantity} x €{item.unitPrice.toFixed(2)}
              </Text>

              <TouchableOpacity
                onPress={() => startEditingProduct(item)}
                style={styles.editButton}
              >
                <Image source={editIcon} style={styles.editButtonImage} />
              </TouchableOpacity>
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

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {editingProductId ? "Edit Product" : "Add New Product"}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Product Name"
              value={newProductName}
              onChangeText={setNewProductName}
            />
            <Picker
              selectedValue={newProductCategory}
              style={styles.pickerInput}
              onValueChange={setNewProductCategory}
            >
              <Picker.Item label="Category" value="category" enabled={false} />
              <Picker.Item label="Bakery" value="bakery" />
              <Picker.Item label="Canned" value="canned" />
              <Picker.Item label="Drinks" value="drinks" />
              <Picker.Item label="Fish" value="fish" />
              <Picker.Item label="Meat" value="meat" />
              <Picker.Item label="Produce" value="produce" />
              <Picker.Item label="Other" value="other" />
            </Picker>
            <TextInput
              style={styles.input}
              placeholder="Quantity"
              keyboardType="numeric"
              value={newProductQuantity}
              onChangeText={setNewProductQuantity}
            />
            <TextInput
              style={styles.input}
              placeholder="Unit Price (€)"
              keyboardType="numeric"
              value={newProductUnitPrice}
              onChangeText={setNewProductUnitPrice}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleAddOrEditProduct}
              >
                <Text style={styles.modalButtonText}>
                  {editingProductId ? "Save Changes" : "Add"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => {
                  setModalVisible(false);
                  setEditingProductId(null);
                }}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  editButton: {
    marginLeft: 10,
  },
  editButtonImage: {
    width: 20,
    height: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  pickerInput: {
    height: 55,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#F49879",
    alignItems: "center",
  },
  cancelButton: {
    opacity: 0.8,
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  categoryImage: {
    width: 20,
    height: 20,
    marginLeft: 10,
    alignSelf: "center",
  },
});

export default ShoppingList;
